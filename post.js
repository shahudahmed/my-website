// my-website/post.js

// Import the Sanity client we already configured
import { client } from './sanityClient.js';
// Import a library to convert Sanity's rich text to HTML
import { toHTML } from 'https://esm.sh/@portabletext/to-html';

// --- 1. Get the Slug from the URL ---
const params = new URLSearchParams(window.location.search);
const postSlug = params.get('slug');

// --- 2. Define the Query for a Single Post ---
// This query looks for the one post that matches the slug from our URL
// The '$slug' is a parameter we will pass to the query
const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    "authorName": author->name,
    body,
    publishedAt
}`;
const queryParams = { slug: postSlug };

// --- 3. Fetch the Data and Render the Page ---
client.fetch(query, queryParams).then(post => {
    if (post) {
        // Get the HTML elements we created in post.html
        const titleElement = document.getElementById('post-title');
        const authorElement = document.getElementById('post-author');
        const bodyElement = document.getElementById('post-body');

        // Set the title and author
        titleElement.textContent = post.title;
        document.title = post.title; // Also update the browser tab title
        authorElement.textContent = `By ${post.authorName || 'Anonymous'}`;

        // Convert the "Portable Text" body into HTML and display it
        const bodyHtml = toHTML(post.body);
        bodyElement.innerHTML = bodyHtml;
    } else {
        // Handle case where no post with that slug was found
        const postContainer = document.getElementById('post-content-container');
        postContainer.innerHTML = '<h1>404 - Post Not Found</h1><p>We could not find the post you were looking for.</p>';
    }
}).catch(error => {
    console.error('Error fetching post:', error);
    const postContainer = document.getElementById('post-content-container');
    postContainer.innerHTML = '<h1>Error</h1><p>Sorry, the post could not be loaded at this time.</p>';
});
