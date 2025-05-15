import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} NoteSummarizer. Built with ❤️ for learners.
    </footer>
  );
};

export default Footer;
