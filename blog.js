// my-website/blog.js - The Complete Final Code

// Import the client we already configured
import { client } from './sanityClient.js';

// Get the container element from blog.html
const postsContainer = document.getElementById('posts-container');

// The new, more powerful query to get all the data we need
const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  "authorName": author->name,
  "imageUrl": mainImage.asset->url,
  publishedAt,
  categories[]->{title}
}`;

// Fetch the data from Sanity
client.fetch(query).then(posts => {
  // Clear any old "loading..." messages or previous content
  postsContainer.innerHTML = '';

  // Loop through each post
  posts.forEach(post => {
    // We create an anchor tag <a> so the whole card is clickable
    const postCard = document.createElement('a');
    postCard.href = `/post.html?slug=${post.slug.current}`;
    postCard.classList.add('post-card'); // Use our new, specific class

    // Format the date to be more readable (e.g., "June 8, 2025")
    const publishDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    });

    // Generate HTML for category tags if they exist, otherwise, an empty string
    const categoryTags = post.categories ? post.categories.map(cat =>
        `<span class="post-card-category">${cat.title}</span>`
    ).join('') : '';

    // Set the inner HTML for the new card structure
    postCard.innerHTML = `
        <div class="post-card-image" style="background-image: url(${post.imageUrl || ''})"></div>
        <div class="post-card-content">
            <div class="post-card-tags">
                ${categoryTags}
            </div>
            <h4 class="post-card-title">${post.title}</h4>
            <div class="post-card-meta">
                <span class="post-card-author">By ${post.authorName || 'Anonymous'}</span>
                <span class="post-card-date">${publishDate}</span>
            </div>
        </div>
    `;

    // Append the new, complete card to the container
    postsContainer.appendChild(postCard);
  });
}).catch(error => {
    console.error('Error fetching posts:', error);
    postsContainer.innerHTML = "<p>Could not load blog posts at this time.</p>";
});
