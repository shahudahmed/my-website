"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header id="header" className="bg-gray-900 border-b border-gray-800">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="logo flex items-center gap-2">
          <img
            src="/images/logo.avif"
            alt="Big Red Banana Logo"
            style={{
              height: "40px",
              width: "40px",
              objectFit: "contain",
              marginRight: "10px",
            }}
          />
          <span className="logo-text-big text-yellow-400 font-bold text-xl">Big</span>
          &nbsp;<span className="logo-text-red text-red-500 font-bold text-xl">Red</span>
          &nbsp;<span className="logo-text-banana text-yellow-400 font-bold text-xl">Banana</span>
        </Link>
        
        {/* Desktop Navigation */}
        <ul
          className={`nav-links flex gap-6 ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link 
              href="/" 
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="#about" 
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="#team" 
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Team
            </Link>
          </li>
          <li>
            <Link 
              href="#work" 
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link 
              href="#reviews" 
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link 
              href="#pricing" 
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link 
              href="#contact" 
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              href="/blog" 
              className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
            >
              Blog
            </Link>
          </li>
        </ul>
        
        {/* Mobile Menu Toggle */}
        <div
          className="mobile-menu flex flex-col gap-1 cursor-pointer lg:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-800 border-t border-gray-700">
          <ul className="container py-4 space-y-3">
            <li>
              <Link 
                href="/" 
                className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="#about" 
                className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="#team" 
                className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Team
              </Link>
            </li>
            <li>
              <Link 
                href="#work" 
                className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                href="#reviews" 
                className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link 
                href="#pricing" 
                className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className="block text-white hover:text-yellow-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
