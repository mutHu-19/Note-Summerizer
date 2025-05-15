// src/pages/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
import Sidebar from '../components/Sidebar';
import { Typography } from '@mui/material';

const Dashboard = () => {
  const [noteTitle, setNoteTitle] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);
  const [textInput, setTextInput] = useState('');

    const user = {
    username: 'Muthu19',
    email: 'user@example.com',
    role: 'Student'
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // TODO: Add upload logic
    console.log({
      title: noteTitle,
      category,
      file,
      text: textInput
    });
  };

  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="dashboard-main">
<section className="user-summary" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h2>Welcome back, 👋</h2>
  {user && (
    <Typography>
      Hello, {user.username || user.email || 'User'}
    </Typography>
  )}
</section>


        <section className="recent-activity">
          <h3>📌 Recent Activity</h3>
          <ul>
            <li>✅ Uploaded: Lecture Notes - AI Fundamentals</li>
            <li>📝 Generated Quiz: "Intro to Machine Learning"</li>
            <li>📄 Viewed Summary: "Data Structures Overview"</li>
          </ul>
        </section>

        <section className="upload-section">
          <h3>📤 Upload Notes</h3>
          <form onSubmit={handleUpload} className="upload-form">
            <input
              type="text"
              placeholder="Note Title"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
              required
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option value="math">Mathematics</option>
              <option value="science">Science</option>
              <option value="history">History</option>
              <option value="other">Other</option>
            </select>

            <textarea
              placeholder="Paste your note text here..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              rows={5}
            />

            <input
              type="file"
              accept=".pdf, image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <button type="submit" className="upload-btn">Upload Note</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
