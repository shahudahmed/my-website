
"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header id="header">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="logo flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="Big Red Banana Logo"
            style={{
              height: "40px",
              width: "40px",
              objectFit: "contain",
              marginRight: "10px"
            }}
          />
          <span className="logo-text-big">Big</span>
          &nbsp;<span className="logo-text-red">Red</span>
          &nbsp;<span className="logo-text-banana">Banana</span>
        </Link>
        <ul className="nav-links flex gap-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#team">Team</Link></li>
          <li><Link href="#work">Portfolio</Link></li>
          <li><Link href="#reviews">Reviews</Link></li>
          <li><Link href="/sloganizer">AI Sloganizer</Link></li>
          <li><Link href="#pricing">Pricing</Link></li>
          <li><Link href="#contact">Contact</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
        <div className="mobile-menu flex flex-col gap-1 cursor-pointer">
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </div>
      </nav>
    </header>
  );
}
