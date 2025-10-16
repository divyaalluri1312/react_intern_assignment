import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing.jsx';
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
import Profile from './pages/profile.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
