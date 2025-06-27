import { client } from '../../../lib/sanity';

interface Props {
  params: { slug: string }
}

// If your post has a "body" field, you might need a block renderer like PortableText.
// For now, this example just shows the title and published date.

export default async function Page({ params }: Props) {
  // Fetch the blog post from Sanity based on the slug
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt
      // Add fields as needed, e.g. body
    }`,
    { slug: params.slug }
  );

  if (!post) {
    return <div className="text-red-600">Post not found.</div>;
  }

  return (
    <article className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-8">{post.publishedAt && (new Date(post.publishedAt)).toLocaleDateString()}</p>
      {/* Add body/content renderer here if you need */}
      {/* Example: <PortableText value={post.body} /> */}
    </article>
  );
}
