import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProfileBg from '../assets/images/profile-bg.png';
import UserIcon from '../assets/icons/user.svg';
import BackIcon from '../assets/icons/back.svg';

export default function Profile() {
  const location = useLocation();
  const { name, email } = location.state || { name: 'John Doe', email: 'john@example.com' };

  return (
    <div className="page-wrapper">
      <div className="mobile-frame">
        <header className="app-header">
          <h1>Profile</h1>
        </header>
        <main className="app-main">
          <img src={ProfileBg} alt="Profile Background" className="hero-img" />
          <div className="profile-info">
            <img src={UserIcon} alt="User Icon" className="icon" />
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </div>
          <Link to="/" className="btn">
            <img src={BackIcon} alt="Back" className="icon" /> Back to Landing
          </Link>
        </main>
      </div>
    </div>
  );
}
