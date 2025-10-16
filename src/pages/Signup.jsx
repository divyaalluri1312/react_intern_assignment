import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignupBg from '../assets/images/signup-bg.png';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/profile', { state: { name: name, email: email } });
  };

  return (
    <div className="page-wrapper">
      <div className="mobile-frame">
        <header className="app-header">
          <h1>Sign Up</h1>
        </header>
        <main className="app-main">
          <img src={SignupBg} alt="Signup Background" className="hero-img" />
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <button className="btn" onClick={handleSignup}>Sign Up</button>
          <p>Already have an account? <Link to="/login">Login</Link></p>
          <Link to="/" className="btn secondary-btn">Back to Landing</Link>
        </main>
      </div>
    </div>
  );
}
