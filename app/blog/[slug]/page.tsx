import { client } from '../../../lib/sanity';

interface PageProps {
  params: { slug: string }
}

export default async function Page({ params }: PageProps) {
  // Fetch the post data from Sanity using the slug
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug: params.slug }
  );

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div>{/* Render post content here (e.g., body) */}</div>
    </article>
  );
}
