import Head from "next/head";
import Image from "next/image"; // Added for image optimization
import Header from "../components/Header";
import Footer from "../components/Footer";
import { sanityClient } from "../lib/sanity"; // Adjust path to your Sanity client setup
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const blogQuery = `*[_type == "post"] | order(publishedAt desc)[0...3] {
    title,
    slug,
    publishedAt,
    mainImage {
      asset->{
        url
      }
    },
    excerpt
  }`;
  const posts = await sanityClient.fetch(blogQuery);

  return {
    props: { posts },
    revalidate: 60, // Incremental Static Regeneration every 60 seconds
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Big Red Banana - Digital Marketing Agency That Drives Results</title>
        <meta name="description" content="Big Red Banana is a bold digital marketing agency focused on explosive growth, unforgettable branding, and creative digital strategies." />
        <meta property="og:title" content="Big Red Banana - Digital Marketing Agency That Drives Results" />
        <meta property="og:description" content="We make brands go absolutely bananas with data-driven strategies and bold creativity." />
        <meta property="og:image" content="https://yourdomain.com/preview.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" async></script>
      </Head>
      <Header className="sticky top-0 z-50" /> {/* Sticky header */}

      <div className="bg-animation">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>We Make Brands Go Absolutely Bananas!</h1>
              <p className="subtitle">
                Transform your digital presence with bold, data-driven marketing strategies that deliver explosive growth and unforgettable brand experiences.
              </p>
              <div className="cta-group">
                <a href="#contact" className="cta-button cta-primary" style={{ backgroundColor: "#E82F2F" }}>
                  <i className="fas fa-rocket"></i> Start Your Journey
                </a>
                <a href="#work" className="cta-button cta-secondary">
                  <i className="fas fa-eye"></i> View Our Work
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <Image
                src="https://i.ibb.co/tTJf2QNx/BRB-red-banana.png"
                alt="Big Red Banana"
                width={300}
                height={300}
                className="main-icon-svg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item"><h3>100+</h3><p>Successful Campaigns</p></div>
            <div className="stat-item"><h3>250%</h3><p>Average ROI Increase</p></div>
            <div className="stat-item"><h3>50+</h3><p>Happy Clients</p></div>
            <div className="stat-item"><h3>5M+</h3><p>Audience Reached</p></div>
          </div>
        </div>
      </section>

      <section className="logo-carousel-section">
        <div className="container">
          <h3 style={{ textAlign: "center", fontWeight: 500, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "3rem" }}>
            Trusted By
          </h3>
        </div>
        <div className="logo-carousel-container">
          {["Akhada Raipur", "Follibloom", "Inspiro 10x", "Bakewana", "Ali+MART", "QualityFood", "FRUITY+PEBBLES", "etisalat"].map((brand, i) => (
            <div className="logo-carousel-item" key={i}>
              <Image
                src={`https://placehold.co/150x60/transparent/FFFFFF?text=${encodeURIComponent(brand)}`}
                alt={brand}
                width={150}
                height={60}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="section-title">Why Big Red Banana?</h2>
          <p className="section-subtitle">
            We're not just another agency; we're your partners in peeling back the layers of digital complexity to reveal explosive growth potential.
          </p>
          <div className="about-content">
            <div className="about-text">
              <h3>We're Not Your Average Digital Agency</h3>
              <p>At Big Red Banana, we believe in bold, creative digital marketing that stands out from the crowd.</p>
              <div className="about-features">
                <div className="feature-item"><i className="fas fa-chart-line"></i><span>Data-Driven Results</span></div>
                <div className="feature-item"><i className="fas fa-palette"></i><span>Creative Excellence</span></div>
                <div className="feature-item"><i className="fas fa-users"></i><span>Expert Team</span></div>
                <div className="feature-item"><i className="fas fa-clock"></i><span>24/7 Support</span></div>
              </div>
            </div>
            <div className="hero-visual">
              <div style={{ fontSize: "12rem", background: "var(--accent-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "pulse 3s infinite alternate ease-in-out" }}>🎯</div>
            </div>
          </div>
        </div>
      </section>

      <section id="team">
        <div className="container">
          <h2 className="section-title">Meet Our Creative Powerhouse</h2>
          <div className="team-grid">
            {[
              { name: "Shakib Hussain", img: "/images/shakib2.jpg", role: "Founder", desc: "The mind behind the madness..." },
              { name: "Shahud Ahmed", img: "/images/shahud.jpg", role: "Co-Founder Strategy Lead & Analytics Expert", desc: "Shahud is the brain behind the game plan..." },
              { name: "Jayprakash Sahu", img: "/images/jay.jpg", role: "Social Media Strategist & Finance Guy", desc: "Jay lives at the intersection of reels and receipts..." },
              { name: "Faizan Alam", img: "/images/faizan.jpg", role: "SEO & Video Editor", desc: "Faizan is the guy who makes sure you see us..." }
            ].map((member, i) => (
              <div className="team-card" key={i}>
                <Image src={member.img} alt={member.name} width={120 [120](https://120.com) height={120} style={{ borderRadius: "50%", border: "4px solid #E82F2F" }} />
                <h4>{member.name}</h4>
                <div className="role">{member.role}</div>
                <p>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="work">
        <div className="container">
          <h2 className="section-title">Portfolio That Speaks Volumes</h2>
          <div className="work-grid">
            <div className="work-card">
              <div className="work-image">📱</div>
              <div className="work-content">
                <h4>Follibloom</h4>
                <p>Complete social media overhaul that increased engagement by 350%...</p>
              </div>
            </div>
            <div className="work-card">
              <div className="work-image">🛍️</div>
              <div className="work-content">
                <h4>Sagar Shridesh Podcast</h4>
                <p>Strategised. Edited. Optimised. Result? 150% more views...</p>
              </div>
            </div>
            <div className="work-card">
              <div className="work-image">🏠</div>
              <div className="work-content">
                <h4>Akhada Standup Comedy</h4>
                <p>Turned laughs into likes: Video edits, content, and promo campaigns...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="container">
          <h2 className="section-title">Pricing Plans That Peel Open Potential</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter Peel</h3>
              <div className="pricing-card-price"><span className="currency">₹</span>14999<span className="period">/Month</span></div>
              <ul className="pricing-features">
                <li><i className="fas fa-check-circle"></i> Social Account Setup (2 Platforms)</li>
                <li><i className="fas fa-check-circle"></i> Basic Content Creation & Posting</li>
              </ul>
              <a href="#contact" className="cta-button cta-secondary"><i className="fas fa-shopping-cart"></i> Get Started</a>
            </div>
            <div className="pricing-card recommended">
              <div className="recommended-badge">Most Popular</div>
              <h3>Growth Bundle</h3>
              <div className="pricing-card-price"><span className="currency">₹</span>24999<span className="period">/Month</span></div>
              <ul className="pricing-features">
                <li><i className="fas fa-check-circle"></i> Everything in Starter Peel, plus:</li>
                <li><i className="fas fa-check-circle"></i> Content Strategy & Development</li>
              </ul>
              <a href="#contact" className="cta-button cta-primary" style={{ backgroundColor: "#E82F2F" }}><i className="fas fa-rocket"></i> Choose Plan</a>
            </div>
            <div className="pricing-card">
              <h3>Banana Bonanza</h3>
              <div className="pricing-card-price"><span className="currency">₹</span>34999<span className="period">/Month</span></div>
              <ul className="pricing-features">
                <li><i className="fas fa-check-circle"></i> Everything in Growth Bundle, plus:</li>
                <li><i className="fas fa-check-circle"></i> Comprehensive Social Media Management</li>
              </ul>
              <a href="#contact" className="cta-button cta-secondary"><i className="fas fa-crown"></i> Go Bonanza</a>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="blog-section">
        <div className="container">
          <h2 className="section-title">Latest Blog Posts</h2>
          <p className="section-subtitle">Stay updated with our latest insights and tips.</p>
          <div className="blog-grid">
            {posts.map((post) => (
              <div className="blog-card" key={post.slug.current}>
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  width={300}
                  height={200}
                  loading="lazy"
                />
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href={`/blog/${post.slug.current}`} className="cta-button" style={{ backgroundColor: "#E82F2F" }}>
                  Read More
                </a>
              </div>
            ))}
          </div>
          <a href="/blog" className="cta-button cta-secondary">View All Posts</a>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-intro">
              <div>
                <div className="sub-heading">REQUEST A QUOTE</div>
                <h2>Need A Free Quote? Contact Us</h2>
                <p>Welcome to our digital playground! We're here to transform your brand's digital journey.</p>
              </div>
              <div className="phone-contact">
                <i className="fas fa-phone-alt"></i>
                <span>Call: +91 7024783943</span>
              </div>
            </div>
            <div className="request-form-container">
              <h3>Get Your Free Quote Today!</h3>
              <form className="request-form" action="https://formspree.io/f/xgvyeryb" method="POST">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Select A Service</label>
                  <select id="service" name="service" required>
                    <option value="">Select a service</option>
                    <option value="digital_marketing">Digital Marketing</option>
                    <option value="social_media_marketing">Social Media Marketing</option>
                    <option value="website_development">Website Development & Design</option>
                    <option value="content_writing">Content Writing</option>
                    <option value="seo_analytics">SEO & Analytics</option>
                    <option value="video_marketing">Video Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" placeholder="Message minimum 50 characters" rows={5}></textarea>
                </div>
                <button type="submit" className="cta-button request-button" style={{ backgroundColor: "#E82F2F" }}>
                  Request A Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="reviews-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real results. Real stories.</p>
          <div className="reviews-carousel" id="reviewsCarousel"></div>
          <div className="reviews-controls">
            <button className="reviews-arrow" id="prevReview"><i className="fas fa-chevron-left"></i></button>
            <div className="reviews-dots" id="reviewsDots"></div>
            <button className="reviews-arrow" id="nextReview"><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </section>

      <a href="#home" className="scroll-top hidden-initially" id="scrollTop">
        <i className="fas fa-arrow-up"></i>
      </a>
      <Footer />
    </>
  );
}