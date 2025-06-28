import Link from 'next/link';

export default function Header() {
  return (
    <header id="header">
      <nav className="container">
        <Link href="/" className="logo">
          <img 
            src="/images/logo.png" 
            alt="Logo"
            style={{ height: '50px', width: 'auto', display: 'block' }} 
          />
        </Link>
        <ul className="nav-links">
          <li><Link href="/#home">Home</Link></li>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#team">Team</Link></li>
          <li><Link href="/#work">Portfolio</Link></li>
          <li><Link href="/sloganizer">AI Sloganizer</Link></li>
          <li><Link href="/#reviews">Reviews</Link></li>
          <li><Link href="/#pricing">Pricing</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
}
