// pages/index.tsx

import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Home() {
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
        {/* Fonts & Icons */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </Head>
      <Header />

      {/* Background Animation */}
      <div className="bg-animation">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>We Make Brands Go Absolutely Bananas!</h1>
              <p className="subtitle">
                Transform your digital presence with bold, data-driven marketing strategies that deliver explosive growth and unforgettable brand experiences.
              </p>
              <div className="cta-group">
                <a href="#contact" className="cta-button cta-primary">
                  <i className="fas fa-rocket"></i>
                  Start Your Journey
                </a>
                <a href="#work" className="cta-button cta-secondary">
                  <i className="fas fa-eye"></i>
                  View Our Work
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src="https://i.ibb.co/tTJf2QNx/BRB-red-banana.png"
                alt="Big Red Banana"
                className="main-icon-svg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>100+</h3>
              <p>Successful Campaigns</p>
            </div>
            <div className="stat-item">
              <h3>250%</h3>
              <p>Average ROI Increase</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>5M+</h3>
              <p>Audience Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO CAROUSEL */}
      <section className="logo-carousel-section">
        <div className="container">
          <h3 style={{ textAlign: "center", fontWeight: 500, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "3rem" }}>
            Trusted By
          </h3>
        </div>
        <div className="logo-carousel-container">
          {[
            "Akhada Raipur",
            "Follibloom",
            "Inspiro 10x",
            "Bakewana",
            "Ali+MART",
            "QualityFood",
            "FRUITY+PEBBLES",
            "etisalat",
            "Akhada Raipur",
            "Follibloom",
            "Inspiro 10x",
            "Bakewana",
            "Ali+MART",
            "QualityFood",
            "FRUITY+PEBBLES",
            "etisalat",
          ].map((brand, i) => (
            <div className="logo-carousel-item" key={i}>
              <img
                src={`https://placehold.co/150x60/transparent/FFFFFF?text=${encodeURIComponent(brand)}`}
                alt={brand}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <h2 className="section-title">Why Big Red Banana?</h2>
          <p className="section-subtitle">
            We're not just another agency; we're your partners in peeling back the layers of digital complexity to reveal explosive growth potential.
          </p>
          <div className="about-content">
            <div className="about-text">
              <h3>We're Not Your Average Digital Agency</h3>
              <p>
                At Big Red Banana, we believe in bold, creative digital marketing that stands out from the crowd. Just like our name, we're memorable, vibrant, and absolutely impossible to ignore.
              </p>
              <p>
                Our passionate team combines strategic thinking with creative execution to deliver campaigns that not only look stunning but drive real, measurable business results.
              </p>
              <p>
                Ready to make your brand the talk of the town? Let's go bananas together and create something extraordinary!
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <i className="fas fa-chart-line"></i>
                  <span>Data-Driven Results</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-palette"></i>
                  <span>Creative Excellence</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-users"></i>
                  <span>Expert Team</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-clock"></i>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div style={{
                fontSize: "12rem",
                background: "var(--accent-gradient)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "pulse 3s infinite alternate ease-in-out"
              }}>🎯</div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team">
        <div className="container">
          <h2 className="section-title">Meet Our Creative Powerhouse</h2>
          <p className="section-subtitle">
            The brilliant minds ready to make your brand go bananas. Passionate, dedicated, and a little bit wild (in the best way!).
          </p>
          <div className="team-grid">
            {/* TEAM MEMBERS */}
            {[
              {
                name: "Shakib Hussain",
                img: "/images/shakib2.avif",
                role: "Founder",
                desc: "The mind behind the madness, Shakib Hussain is the driving force behind Big Red Banana. With a bold name and an even bolder vision, Shakib set out to build a brand that doesn't just stand out — it sticks in your mind."
              },
              {
                name: "Shahud Ahmed",
                img: "/images/shahud.avif",
                role: "Co-Founder Strategy Lead & Analytics Expert",
                desc: "Shahud is the brain behind the game plan. As Co-Founder and Strategy Lead, he connects dots others miss — turning data into direction and chaos into clarity. With a sharp eye on the numbers and a sharper instinct for what’s next, Shahud ensures Big Red Banana isn’t just creative — it’s calculated. Basically, he’s the reason our wild ideas actually work."
              },
              {
                name: "Jayprakash sahu",
                img: "/images/jay.jpg",
                role: "Social Media Strategist & Finance guy",
                desc: "Jay lives at the intersection of reels and receipts. He crafts content that grabs attention and keeps the numbers that make it all possible in check. Whether it's planning the next viral post or balancing the books, Jay brings creativity and clarity to Big Red Banana’s madness."
              },
              {
                name: "Faizan Alam",
                img: "/images/faizan.jpg",
                role: "SEO & Video Editor",
                desc: "Faizan is the guy who makes sure you see us — and find us. From ranking pages on Google to cutting crisp, scroll-worthy edits, he blends creativity with strategy. Whether it’s keywords or keyframes, Faizan brings the magic that gets Big Red Banana noticed (and remembered)."
              }
            ].map((member, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar">
                  <img src={member.img} alt={member.name} style={{ width: 120, height: 120, borderRadius: "50%", border: "4px solid #E82F2F" }} />
                </div>
                <h4>{member.name}</h4>
                <div className="role">{member.role}</div>
                <p>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK/PORTFOLIO */}
      <section id="work" className="work">
        <div className="container">
          <h2 className="section-title">Portfolio That Speaks Volumes</h2>
          <p className="section-subtitle">Check out some of the amazing results we've peeled for our clients. Each project is a testament to our commitment to excellence and growth.</p>
          <div className="work-grid">
            {/* Add your work items here */}
            <div className="work-card">
              <div className="work-image">📱</div>
              <div className="work-content">
                <h4>Follibloom</h4>
                <p>Complete social media overhaul that increased engagement by 350% and generated 200+ qualified leads through targeted content strategy and community building.</p>
                <div className="work-tags">
                  <span className="work-tag">Social Media Management</span>
                  <span className="work-tag">Content Strategy</span>
                  <span className="work-tag">Lead Generation</span>
                  <span className="work-tag">Brand Strategy</span>
                  <span className="work-tag">Influencer Marketing</span>
                </div>
              </div>
            </div>
            <div className="work-card">
              <div className="work-image">🛍️</div>
              <div className="work-content">
                <h4>Sagar Shridesh Podcast</h4>
                <p>Strategised. Edited. Optimised. Result? 150% more views, stronger community, and a podcast that finally popped.</p>
                <div className="work-tags">
                  <span className="work-tag">Content Strategy</span>
                  <span className="work-tag">Optimised</span>
                  <span className="work-tag">SEO</span>
                  <span className="work-tag">Increased Retention</span>
                </div>
              </div>
            </div>
            <div className="work-card">
              <div className="work-image">🏠</div>
              <div className="work-content">
                <h4>Akhada Standup Comedy</h4>
                <p>Turned laughs into likes: Video edits, content, and promo campaigns that grew Akhada’s comedy page by 3x in engagement and sold out shows.</p>
                <div className="work-tags">
                  <span className="work-tag">Video Editing</span>
                  <span className="work-tag">SMM</span>
                  <span className="work-tag">Content Writing</span>
                  <span className="work-tag">Promo  Campaigns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing">
        <div className="container">
          <h2 className="section-title">Pricing Plans That Peel Open Potential</h2>
          <p className="section-subtitle">We offer competitive and transparent pricing to help your business thrive. Choose the plan that's ripe for your success!</p>
          <div className="pricing-grid">
            {/* Pricing Cards */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3>Starter Peel</h3>
                <p className="plan-subtitle">For Small Businesses & Startups</p>
              </div>
              <div className="pricing-card-price">
                <span className="currency">₹</span>14999<span className="period">/Month</span>
              </div>
              <ul className="pricing-features">
                <li><i className="fas fa-check-circle"></i> Social Account Setup (2 Platforms)</li>
                <li><i className="fas fa-check-circle"></i> Basic Content Creation & Posting</li>
                <li><i className="fas fa-check-circle"></i> Community Engagement Basics</li>
                <li><i className="fas fa-check-circle"></i> Monthly Performance Snapshot</li>
                <li><i className="fas fa-check-circle"></i> Hashtag Research & Strategy</li>
                <li className="dimmed"><i className="fas fa-times-circle"></i> Advanced Analytics</li>
                <li className="dimmed"><i className="fas fa-times-circle"></i> Ad Spend Consultation</li>
              </ul>
              <a href="#contact" className="cta-button cta-secondary">
                <i className="fas fa-shopping-cart"></i> Get Started
              </a>
            </div>
            <div className="pricing-card recommended">
              <div className="recommended-badge">Most Popular</div>
              <div className="pricing-card-header">
                <h3>Growth Bundle</h3>
                <p className="plan-subtitle">For Growing Medium Businesses</p>
              </div>
              <div className="pricing-card-price">
                <span className="currency">₹</span>24999<span className="period">/Month</span>
              </div>
              <ul className="pricing-features">
                <li><i className="fas fa-check-circle"></i> Everything in Starter Peel, plus:</li>
                <li><i className="fas fa-check-circle"></i> Content Strategy & Development</li>
                <li><i className="fas fa-check-circle"></i> Enhanced Content Creation (Graphics/Video)</li>
                <li><i className="fas fa-check-circle"></i> Audience Targeting & Growth Tactics</li>
                <li><i className="fas fa-check-circle"></i> Social Media Ad Management (Up to $500/mo)</li>
                <li><i className="fas fa-check-circle"></i> Advanced Analytics & Reporting</li>
                <li><i className="fas fa-check-circle"></i> Competitor Analysis Lite</li>
              </ul>
              <a href="#contact" className="cta-button cta-primary">
                <i className="fas fa-rocket"></i> Choose Plan
              </a>
            </div>
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3>Banana Bonanza</h3>
                <p className="plan-subtitle">For Large Businesses & Enterprises</p>
              </div>
              <div className="pricing-card-price">
                <span className="currency">₹</span>34999<span className="period">/Month</span>
              </div>
              <ul className="pricing-features">
                <li><i className="fas fa-check-circle"></i> Everything in Growth Bundle, plus:</li>
                <li><i className="fas fa-check-circle"></i> Comprehensive Social Media Management</li>
                <li><i className="fas fa-check-circle"></i> In-depth Analytics & Custom Reporting</li>
                <li><i className="fas fa-check-circle"></i> Advanced Ad Campaign Strategies</li>
                <li><i className="fas fa-check-circle"></i> Reputation Management & Social Listening</li>
                <li><i className="fas fa-check-circle"></i> Cross-Channel Integration Strategy</li>
                <li><i className="fas fa-check-circle"></i> Dedicated Account Manager</li>
              </ul>
              <a href="#contact" className="cta-button cta-secondary">
                <i className="fas fa-crown"></i> Go Bonanza
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-intro">
              <div>
                <div className="sub-heading">REQUEST A QUOTE</div>
                <h2>Need A Free Quote? Please Feel Free to Contact Us</h2>
                <div className="underline"></div>
                <p>
                  Welcome to our digital playground! We're the wizards behind the screens, crafting tailored strategies to boost your online presence. From captivating content to data-driven campaigns, we're here to transform your brand's digital journey into a success story. Let's elevate your online presence together!
                </p>
              </div>
              <div className="contact-info-grid">
                <div className="info-item">
                  <i className="fas fa-reply-all"></i>
                  <span>Reply within 24 hours</span>
                </div>
                <div className="info-item">
                  <i className="fas fa-headset"></i>
                  <span>24 hrs telephone support</span>
                </div>
              </div>
              <div className="phone-contact">
                <i className="fas fa-phone-alt"></i>
                <span>Call to ask any question: +91 7024783943</span>
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
                <button type="submit" className="cta-button request-button">
                  Request A Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="reviews-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real results. Real stories. See why brands love going bananas with us.</p>
          <div className="reviews-carousel" id="reviewsCarousel">
            {/* Reviews will be injected here by JS */}
          </div>
          <div className="reviews-controls">
            <button className="reviews-arrow" id="prevReview">
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="reviews-dots" id="reviewsDots"></div>
            <button className="reviews-arrow" id="nextReview">
              <i className="fas fa-chevron-right"></i>
            </button>
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



