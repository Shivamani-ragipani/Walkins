// components/Header.js
import Link from 'next/link';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo">
          <span className="logo-icon">💼</span>
          <span className="logo-text">Walk-in Jobs HYD</span>
        </Link>
        
        <nav className="nav">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/today" className="nav-link">Today's Jobs</Link>
          <Link href="/upcoming" className="nav-link">Upcoming</Link>
          <Link href="/about" className="nav-link">About</Link>
        </nav>
        
        <button className="mobile-menu-btn">☰</button>
      </div>
    </header>
  );
}