// src/components/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="menu-toggle" onClick={toggleSidebar}>
        <i className="bi bi-list"></i> 
      </button>

      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>NoteSummarizer</h2>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/upload">Upload Notes</a></li>
          <li><a href="/summaries">Summaries</a></li>
          <li><a href="/quizzes">Quizzes</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
