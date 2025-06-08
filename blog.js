// my-website/blog.js

// Import the client we just created
import { client } from './sanityClient.js';

// Get the container element from blog.html
const postsContainer = document.getElementById('posts-container');

// Define the query to fetch blog posts
// GROQ is Sanity's query language
const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)`;

// Fetch the data from Sanity
client.fetch(query).then(posts => {
    // Loop through each post
    posts.forEach(post => {
        // Create a new div element for the blog post card
        const postCard = document.createElement('div');
        postCard.classList.add('work-card'); // Reuse your existing card style

        // Create the content for the card
        postCard.innerHTML = `
            <div class="work-content">
                <h4>${post.title}</h4>
                <p>By ${post.author?.name || 'Anonymous'}</p> <a href="/post.html?slug=${post.slug.current}">Read More</a>
            </div>
        `;

        // Append the new card to the container
        postsContainer.appendChild(postCard);
    });
}).catch(error => {
    console.error('Error fetching posts:', error);
    postsContainer.innerHTML = "<p>Could not load blog posts at this time.</p>";
});