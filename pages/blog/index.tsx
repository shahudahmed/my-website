import Head from 'next/head';
import { useEffect } from 'react';
import { client } from '../../lib/sanity';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// UPDATED Post interface (TypeScript)
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  authorName?: string;
  imageUrl?: string;
  categories?: { title: string }[];
}

// UPDATED Sanity fetch
export async function getStaticProps() {
  const posts = await client.fetch(`
    *[_type == "post" && defined(slug.current)] | order(publishedAt desc){
      _id,
      title,
      slug,
      "authorName": author->name,
      "imageUrl": mainImage.asset->url,
      publishedAt,
      categories[]->{title}
    }
  `);
  return { props: { posts }, revalidate: 60 };
}

export default function Blog({ posts }: { posts: Post[] }) {
  useEffect(() => {
    setTimeout(() => {
      const loading = document.getElementById('loading');
      if (loading) loading.classList.add('hidden');
    }, 800);
  }, []);

  return (
    <>
      <Head>
        <title>Blog - Big Red Banana</title>
        <meta name="description" content="News, insights, and updates from the Big Red Banana team." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
        <meta property="og:title" content="Blog - Big Red Banana" />
        <meta property="og:description" content="Need a catchy slogan? Let our AI-powered tool spark your creativity!" />
        <meta property="og:image" content="https://yourdomain.com/preview.jpg" />
        <meta property="og:url" content="https://yourdomain.com/blog.html" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      {/* Loader */}
      <div className="loading" id="loading">
        <div className="spinner"></div>
      </div>

      {/* Animated BG */}
      <div className="bg-animation">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Main Blog Content */}
      <main className="container">
        <h1 className="section-title">The Big Red Banana Blog</h1>
        <p className="section-subtitle">News, insights, and updates from the team.</p>
        <div id="posts-container" className="work-grid blog-grid-fix">
          {posts.map(post => (
            <a
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="post-card"
              style={{ textDecoration: "none" }}
            >
              <div
                className="post-card-image"
                style={{
                  backgroundImage: post.imageUrl ? `url(${post.imageUrl})` : "none",
                  backgroundColor: post.imageUrl ? undefined : "#ffe7c6",
                  minHeight: '200px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderTopLeftRadius: '20px',
                  borderTopRightRadius: '20px',
                }}
              />
              <div className="post-card-content">
                <div className="post-card-tags">
                  {post.categories && post.categories.map((cat, i) => (
                    <span key={i} className="post-card-category">{cat.title}</span>
                  ))}
                </div>
                <h4 className="post-card-title">{post.title}</h4>
                <div className="post-card-meta">
                  <span className="post-card-author">
                    By {post.authorName || 'Anonymous'}
                  </span>
                  <span className="post-card-date">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric', month: 'long', day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll Top Button */}
      <a href="#home" className="scroll-top hidden-initially" id="scrollTop">
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  );
}

// --- ADD THIS TO styles.css ---
// .blog-grid-fix { grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; }
// .post-card-image { aspect-ratio: 16/9; background-repeat: no-repeat; background-size: cover; background-position: center; }
