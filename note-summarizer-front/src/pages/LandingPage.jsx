import React from "react";
import "./LandingPage.css";
import Image from '../assets/hero.jpg'

const LandingPage = () => {
  return (
    <div className="landing-container">
     {/* Hero Section */}
<section className="hero">
  <div className="hero-content">
    <div className="hero-text">
      <h1>NoteSummarizer</h1>
      <p>Turn your lecture notes into smart summaries and quizzes instantly with AI.</p>
      <div className="hero-buttons">
        <a href="/signup" className="btn primary">Sign Up</a>
        <a href="/login" className="btn secondary">Log In</a>
      </div>
    </div>
    <div className="hero-image">
      <img src={Image} alt="AI Illustration" />
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>AI Summarization</h3>
            <p>Upload notes and get concise, accurate summaries powered by GPT-4.</p>
          </div>
          <div className="feature-card">
            <h3>Auto Quiz Generator</h3>
            <p>Generate MCQs, fill-in-the-blanks, and true/false questions automatically.</p>
          </div>
          <div className="feature-card">
            <h3>Organized Dashboard</h3>
            <p>Access saved summaries, quizzes, and take tests with scores.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"Saved me hours of note-taking during revision week!"</p>
            <strong>– Ayesha, Student</strong>
          </div>
          <div className="testimonial-card">
            <p>"Creating quizzes for my class has never been easier."</p>
            <strong>– Mr. Raj, Lecturer</strong>
          </div>
          <div className="testimonial-card">
            <p>"Perfect for online learners like me. I can study anywhere."</p>
            <strong>– Sam, Self-Learner</strong>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Get Smarter with Your Notes?</h2>
        <p>Join thousands of learners using NoteSummarizer to study smarter.</p>
        <a href="/signup" className="btn primary">Get Started</a>
      </section>

     
    </div>
  );
};

export default LandingPage;
