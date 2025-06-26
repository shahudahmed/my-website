import {GetStaticPaths, GetStaticProps} from 'next'
import {useRouter} from 'next/router'
import {PortableText} from '@portabletext/react'
import {client} from '../../lib/sanity'

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs: string[] = await client.fetch(`*[_type=="post" && defined(slug.current)][].slug.current`)
  const paths = slugs.map(slug => ({params: {slug}}))
  return {paths, fallback: true}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const slug = params?.slug as string
  const query = `*[_type=="post" && slug.current==$slug][0]{
    title, body, "authorName": author->name, publishedAt
  }`
  const post = await client.fetch(query, {slug})
  return {props: {post}}
}

type Post = {
  title: string
  body: any
  authorName: string
  publishedAt: string
}

export default function PostPage({post}:{post: Post}) {
  const router = useRouter()
  if(router.isFallback) return <p>Loading...</p>
  if(!post) return <p>Not found</p>
  return (
    <article className="container">
      <h1>{post.title}</h1>
      <PortableText value={post.body} />
    </article>
  )
}
