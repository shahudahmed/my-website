import Head from 'next/head'
import Link from 'next/link'

function Header() {
  return (
    <header id="header">
      <nav className="container">
        <Link href="#home" className="logo">
          <img src="https://i.ibb.co/tTJf2QNx/BRB-red-banana.png" alt="Big Red Banana Logo" className="logo-icon-svg" />
          <span className="logo-text-big">Big</span>&nbsp;<span className="logo-text-red">Red</span>&nbsp;<span className="logo-text-banana">Banana</span>
        </Link>
        <ul className="nav-links">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#team">Team</Link></li>
          <li><Link href="#work">Portfolio</Link></li>
          <li><Link href="#reviews">Reviews</Link></li>
          <li><Link href="/sloganizer">AI Sloganizer</Link></li>
          <li><Link href="#pricing">Pricing</Link></li>
          <li><Link href="#contact">Contact</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>We Make Brands Go Absolutely Bananas!</h1>
            <p className="subtitle">Transform your digital presence with bold, data-driven marketing strategies.</p>
            <div className="cta-group">
              <a href="#contact" className="cta-button cta-primary">Start Your Journey</a>
              <a href="#work" className="cta-button cta-secondary">View Our Work</a>
            </div>
          </div>
          <div className="hero-visual">
            <img src="https://i.ibb.co/tTJf2QNx/BRB-red-banana.png" alt="Big Red Banana" className="main-icon-svg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Big Red Banana - Digital Marketing Agency</title>
        <meta name="description" content="Big Red Banana is a bold digital marketing agency." />
      </Head>
      <Header />
      <Hero />
    </>
  )
}
