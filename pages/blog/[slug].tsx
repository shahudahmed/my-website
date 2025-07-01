// pages/blog/[slug].tsx

import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { client } from '../../lib/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import RelatedPosts from '../../components/RelatedPosts';
import { useEffect, useRef, useState } from 'react';

interface Post {
  _id: string;
  title: string;
  subtitle?: string;
  slug: { current: string };
  mainImage?: { asset: { url: string } };
  author?: {
    name: string;
    image?: { asset: { url: string } };
  };
  publishedAt: string;
  categories?: { title: string; color?: string }[];
  body: any;
  readingTime?: number;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs: { slug: { current: string } }[] = await client.fetch(
    `*[_type == "post" && defined(slug.current)]{ slug }`
  );
  return {
    paths: slugs.map((s) => ({ params: { slug: s.slug.current } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const post = await client.fetch<Post | null>(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );
  if (!post) return { notFound: true };

  // Calculate reading time (basic: 200 words/minute)
  let text = '';
  if (Array.isArray(post.body)) {
    text = post.body
      .map((b: any) =>
        b.children ? b.children.map((c: any) => c.text).join(' ') : ''
      )
      .join(' ');
  }
  const wordCount = text.split(/\s+/).length;
  post.readingTime = Math.max(1, Math.round(wordCount / 200));

  // Fetch related posts (same category)
  const relatedPosts = await client.fetch(
    `
    *[_type == "post" && slug.current != $slug][0..3]{
      _id, title, slug, publishedAt, "imageUrl": mainImage.asset->url, categories[]->{title}
    }`,
    { slug }
  );

  return { props: { post, relatedPosts }, revalidate: 60 };
};

// Sticky Progress Bar
function ProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    function handleScroll() {
      const h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
      const scrollTop = h[st] || b[st];
      const scrollHeight = h[sh] || b[sh];
      const clientHeight = h.clientHeight;
      const pct = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setProgress(Math.max(0, Math.min(100, pct)));
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 999 }}>
      <div
        style={{
          height: 5,
          background: 'linear-gradient(90deg,#e82f2f 0%,#facc15 100%)',
          width: progress + '%',
          transition: 'width 0.2s',
        }}
      />
    </div>
  );
}

// Table of Contents, with only nav/ul/li structure
function TableOfContents({ headings }: { headings: { id: string; text: string; level: number }[] }) {
  if (headings.length < 3) return null;
  return (
    <nav className="toc-container">
      <ul>
        {headings.map((h) => (
          <li key={h.id} className={`toc-level-${h.level}`}>
            <a href={`#${h.id}`}>{h.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function PostPage({ post, relatedPosts }: { post: Post; relatedPosts: any[] }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [mounted, setMounted] = useState(false);

  // Only extract headings/client-only DOM after hydration
  useEffect(() => {
    setMounted(true);
    if (contentRef.current) {
      const nodes = contentRef.current.querySelectorAll('h2, h3');
      const list: { id: string; text: string; level: number }[] = [];
      nodes.forEach((node: any) => {
        let id = node.textContent.replace(/\s+/g, '-').toLowerCase();
        node.id = id;
        list.push({ id, text: node.textContent, level: node.tagName === 'H2' ? 2 : 3 });
      });
      setHeadings(list);
    }
  }, [post]);

  return (
    <Layout>
      <Head>
        <title>{post.title} | Big Red Banana</title>
        <meta name="description" content={post.subtitle || post.title} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.subtitle || post.title} />
        <meta property="og:image" content={post.mainImage?.asset.url} />
        <meta property="og:type" content="article" />
      </Head>
      <ProgressBar />
      <div className="blog-hero">
        {post.mainImage?.asset.url && (
          <div className="blog-hero-img">
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="blog-hero-gradient" />
          </div>
        )}
        <div className="blog-hero-content">
          <div className="blog-hero-categories">
            {post.categories?.map((cat, i) => (
              <span key={i} className="blog-hero-category-pill">
                {cat.title}
              </span>
            ))}
          </div>
          <h1 className="blog-hero-title">{post.title}</h1>
          {post.subtitle && <div className="blog-hero-subtitle">{post.subtitle}</div>}
          <div className="blog-hero-meta">
            {post.author?.image?.asset?.url && (
              <Image
                src={post.author.image.asset.url}
                alt={post.author.name}
                width={40}
                height={40}
                className="blog-hero-author-avatar"
              />
            )}
            <span className="blog-hero-author-name">{post.author?.name}</span>
            <span>•</span>
            <span className="blog-hero-date">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span>
            <span>•</span>
            <span className="blog-hero-readtime">{post.readingTime} min read</span>
          </div>
        </div>
      </div>

      <div className="blog-post-main-area">
        <div className="blog-post-contentarea">
          <div ref={contentRef} className="post-body">
            <PortableText value={Array.isArray(post.body) ? post.body : []} />
          </div>
        </div>
        <aside className="blog-post-toc">
          {/* TOC title is now always above the nav! */}
          <div className="toc-title">Table of Contents</div>
          {mounted && <TableOfContents headings={headings} />}
        </aside>
      </div>
      <RelatedPosts posts={relatedPosts} />
    </Layout>
  );
}
