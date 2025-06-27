import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Big Red Banana',
  description: 'Digital marketing agency',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="sticky top-0 bg-white shadow z-10">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <Link href="/" className="font-bold text-xl text-[#E30613]">Big Red Banana</Link>
            <ul className="hidden md:flex space-x-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <footer className="bg-gray-100 text-center py-4 text-sm">
          &copy; {new Date().getFullYear()} Big Red Banana. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
