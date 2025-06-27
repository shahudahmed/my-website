import { client } from '../../../lib/sanity';
import { notFound } from 'next/navigation';

interface Post { _id: string; title: string; body: any; }

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch<Post | null>(`*[_type == "post" && slug.current == $slug][0]`, { slug: params.slug });
  if (!post) return notFound();
  return (
    <article className="prose mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <pre>{JSON.stringify(post.body)}</pre>
    </article>
  );
}
