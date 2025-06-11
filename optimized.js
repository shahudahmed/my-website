/**
 * Consolidated JavaScript for the entire website.
 * This file includes:
 * - Preloader logic
 * - Theme switcher (light/dark mode)
 * - Mobile navigation
 * - Active navigation link highlighting
 * - Sanity.io client initialization and data fetching for blog pages
 */
document.addEventListener('DOMContentLoaded', () => {

    // --- Sanity Client Setup ---
    // This uses the Sanity client loaded from the CDN
    const sanity = window.sanityClient.default;
    const client = sanity({
        projectId: 'b56iql1s', // Replace with your Sanity project ID
        dataset: 'production',   // Replace with your Sanity dataset
        apiVersion: '2021-03-25',
        useCdn: true, // `false` if you want to ensure fresh data
    });

    // --- Global UI Elements & Logic ---

    const preloader = document.querySelector('.preloader');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const allNavLinks = document.querySelectorAll('.nav-link');


    // 1. Preloader Logic
    // Hide preloader once the page is fully loaded
    window.addEventListener('load', () => {
        if (preloader) {
            preloader.classList.add('fade-out');
        }
    });

    // 2. Theme Switcher Logic
    const currentTheme = localStorage.getItem('theme');

    // Apply the saved theme on initial load
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        if (themeToggle) themeToggle.checked = true;
    } else {
        body.classList.add('light-theme');
    }

    // Toggle theme on checkbox change
    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                body.classList.replace('light-theme', 'dark-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.replace('dark-theme', 'light-theme');
                localStorage.setItem('theme', 'light');
            }
        });
    }


    // 3. Mobile Navigation Toggle
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 4. Active Navigation Link Highlighting
    const currentPage = window.location.pathname.split('/').pop();
    allNavLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });


    // --- Page-Specific Logic ---

    // Function to generate image URLs from Sanity image assets
    function imageUrlFor(source) {
        if (!source) return '';
        return client.builder.image(source).url();
    }

    // A. Run this code ONLY on the blog list page (blog.html)
    if (document.body.id === 'blog-page') {
        const postsContainer = document.querySelector('.posts-container');
        if (postsContainer) {
            const query = `*[_type == "post"] | order(publishedAt desc) {
                _id,
                title,
                slug,
                mainImage,
                publishedAt
            }`;
            client.fetch(query).then(posts => {
                postsContainer.innerHTML = ''; // Clear any loading spinners
                posts.forEach(post => {
                    const postCard = `
                        <a href="post.html?id=${post.slug.current}" class="post-card">
                            <img src="${imageUrlFor(post.mainImage)}" alt="${post.title}">
                            <div class="post-content">
                                <h2>${post.title}</h2>
                                <p class="post-meta">Published on: ${new Date(post.publishedAt).toLocaleDateString()}</p>
                            </div>
                        </a>
                    `;
                    postsContainer.innerHTML += postCard;
                });
            }).catch(error => {
                console.error('Error fetching posts:', error);
                postsContainer.innerHTML = '<p>Could not load blog posts. Please try again later.</p>';
            });
        }
    }

    // B. Run this code ONLY on the single post page (post.html)
    if (document.body.id === 'post-page') {
        const postContainer = document.querySelector('.post-full');
        if (postContainer) {
            const params = new URLSearchParams(window.location.search);
            const postId = params.get('id');

            if (postId) {
                const query = `*[_type == "post" && slug.current == $slug][0] {
                    title,
                    mainImage,
                    publishedAt,
                    body
                }`;
                client.fetch(query, { slug: postId }).then(post => {
                    if (post) {
                        const postHeader = `
                            <div class="post-full-header">
                                <img src="${imageUrlFor(post.mainImage)}" alt="${post.title}">
                                <h1>${post.title}</h1>
                                <p class="post-full-meta">Published on: ${new Date(post.publishedAt).toLocaleDateString()}</p>
                            </div>
                        `;
                        // Basic block content to HTML conversion
                        // For a full-featured renderer, you'd use a library like @portabletext/to-html
                        let postBody = '';
                        post.body.forEach(block => {
                            if (block._type === 'block') {
                                postBody += `<p>${block.children.map(span => span.text).join('')}</p>`;
                            }
                        });
                        
                        const postContent = `<div class="post-full-content">${postBody}</div>`;
                        
                        postContainer.innerHTML = postHeader + postContent;

                    } else {
                         postContainer.innerHTML = '<h1>Post not found</h1>';
                    }
                }).catch(error => {
                    console.error('Error fetching post:', error);
                    postContainer.innerHTML = '<h1>Error loading post</h1>';
                });
            } else {
                postContainer.innerHTML = '<h1>No post specified</h1>';
            }
        }
    }
});
