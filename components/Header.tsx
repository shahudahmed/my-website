import Link from 'next/link';

export default function Header() {
  return (
    <header id="header">
      <nav className="container">
        <Link href="/" className="logo">
          <span className="logo-text-big">Big</span>&nbsp;
          <span className="logo-text-red">Red</span>&nbsp;
          <span className="logo-text-banana">Banana</span>
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
