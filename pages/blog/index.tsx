import Link from 'next/link'
import {client} from '../../lib/sanity'

export async function getStaticProps() {
  const query = `*[_type == "post" && defined(slug.current)]|order(publishedAt desc){
    _id, title, slug, publishedAt,
    "authorName": author->name,
    "imageUrl": mainImage.asset->url
  }`
  const posts = await client.fetch(query)
  return {props: {posts}}
}

type Post = {
  _id: string
  title: string
  slug: {current: string}
  authorName: string
  publishedAt: string
  imageUrl?: string
}

export default function Blog({posts}:{posts: Post[]}) {
  return (
    <div className="container">
      <h1>Blog</h1>
      <ul>
        {posts.map(p => (
          <li key={p._id}>
            <Link href={`/blog/${p.slug.current}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
