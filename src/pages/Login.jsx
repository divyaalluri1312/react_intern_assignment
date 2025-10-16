import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmailIcon from '../assets/icons/email.svg';
import UserIcon from '../assets/icons/user.svg';
import LoginBg from '../assets/images/login-bg.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Pass name/email via state
    navigate('/profile', { state: { name: 'John Doe', email: email } });
  };

  return (
    <div className="page-wrapper">
      <div className="mobile-frame">
        <header className="app-header">
          <h1>Login</h1>
        </header>
        <main className="app-main">
          <img src={LoginBg} alt="Login Background" className="hero-img" />
          <div className="form-group">
            <img src={EmailIcon} alt="Email Icon" className="icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <img src={UserIcon} alt="User Icon" className="icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button className="btn" onClick={handleLogin}>Login</button>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          <Link to="/" className="btn secondary-btn">Back to Landing</Link>
        </main>
      </div>
    </div>
  );
}
