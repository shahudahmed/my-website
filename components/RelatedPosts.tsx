// components/RelatedPosts.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function RelatedPosts({ posts }: { posts: any[] }) {
  if (!posts || posts.length === 0) return null;
  return (
    <section className="related-posts-section">
      <h3 className="related-posts-title">You Might Also Like</h3>
      <div className="related-posts-grid">
        {posts.map(post => (
          <Link key={post._id} href={`/blog/${post.slug.current}`} className="related-post-card">
            <div className="related-post-image-wrap">
              {post.imageUrl && (
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={200}
                  height={120}
                  className="related-post-image"
                />
              )}
            </div>
            <div className="related-post-info">
              <div className="related-post-title-text">{post.title}</div>
              <div className="related-post-meta">
                {post.categories && post.categories.length > 0 && (
                  <span className="related-post-category-pill">{post.categories[0].title}</span>
                )}
                <span className="related-post-date">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* --- CSS to add to your styles.css ---

*/
