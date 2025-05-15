// src/pages/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
import Sidebar from '../components/Sidebar';
import { Typography } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';

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

const handleUpload = async (e) => {
    e.preventDefault();

    if (!noteTitle || !category || (!file && !textInput)) {
      toast.error('Please fill in all required fields.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('title', noteTitle);
      formData.append('category', category);
      formData.append('text', textInput);
      if (file) formData.append('file', file);

      const token = localStorage.getItem('token'); // Optional: If using JWT auth

      const response = await axios.post(
        'http://localhost:5000/api/notes/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            ...(token && { Authorization: `Bearer ${token}` })
          }
        }
      );

      toast.success('Note uploaded successfully!');
      setNoteTitle('');
      setCategory('');
      setFile(null);
      setTextInput('');
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed to upload note.');
    }
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
