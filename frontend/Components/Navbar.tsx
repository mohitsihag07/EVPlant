"use client";
import Link from "next/link";
import { useState } from "react";
import { text } from "stream/consumers";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">

        {/* Logo */}
        <div className="logo">
          EV<span style={{ color: "#111827" }}>Plant</span>
        </div>

        {/* Menu */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`  }>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Products">Products</Link></li>
          <li><Link href="/Plant">Plant</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>

        {/* Button */}
        <div className="nav-btn">
          <Link href="/Contact" className="btn btn-primary">
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

      </div>
    </nav>
  );
}