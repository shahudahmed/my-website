import Layout from '../../components/Layout';
import { client } from '../../lib/sanity';
import { GetStaticPaths, GetStaticProps } from 'next';

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  body: any;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs: { slug: { current: string } }[] = await client.fetch(`*[_type == "post" && defined(slug.current)]{ slug }`);
  return { paths: slugs.map(s => ({ params: { slug: s.slug.current } })), fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const post = await client.fetch<Post | null>(`*[_type == "post" && slug.current == $slug][0]`, { slug });
  if (!post) return { notFound: true };
  return { props: { post }, revalidate: 60 };
};

export default function PostPage({ post }: { post: Post }) {
  return (
    <Layout>
      <article>
        <h1>{post.title}</h1>
        <div>{JSON.stringify(post.body)}</div>
      </article>
    </Layout>
  );
}
