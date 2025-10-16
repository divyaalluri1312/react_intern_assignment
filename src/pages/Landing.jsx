import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/icons/logo.svg';
import Hero from '../assets/images/landing-hero.png';

export default function Landing() {
  return (
    <div className="page-wrapper">
      <div className="mobile-frame">
        <header className="app-header">
          <img src={Logo} alt="Logo" className="logo" />
        </header>
        <main className="app-main">
          <img src={Hero} alt="Hero" className="hero-img" />
          <h2>Welcome to Our App!</h2>
          <p>Experience the app exactly as designed in XD.</p>

          <Link to="/login" className="btn">Go to Login</Link>
          <Link to="/signup" className="btn">Go to Signup</Link>
        </main>
      </div>
    </div>
  );
}
