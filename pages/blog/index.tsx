import Link from 'next/link';
import Layout from '../../components/Layout';
import { client } from '../../lib/sanity';

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
}

export async function getStaticProps() {
  const posts = await client.fetch<Post[]>(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc){_id,title,slug,publishedAt}`);
  return { props: { posts }, revalidate: 60 };
}

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
