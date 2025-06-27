interface Props {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  // Fetch and render your content
  return (
    <div>
      <h1>Blog post: {params.slug}</h1>
      {/* ...rest of your content */}
    </div>
  );
}
