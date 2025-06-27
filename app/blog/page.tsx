import Link from 'next/link';
import { client } from '../../lib/sanity';

export const metadata = { title: 'Blog - Big Red Banana' };

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
}

export default async function Blog() {
  const posts = await client.fetch<Post[]>(`*[_type == "post" && defined(slug.current)]|order(publishedAt desc){_id,title,slug,publishedAt}`);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul className="space-y-2">
        {posts.map(p => (
          <li key={p._id}>
            <Link href={`/blog/${p.slug.current}`} className="text-[#E30613] hover:underline">{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
