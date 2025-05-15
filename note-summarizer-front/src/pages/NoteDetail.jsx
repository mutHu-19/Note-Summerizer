// src/pages/NoteDetails.js
import React, { useState } from 'react';
import './NoteDetails.css';
import Sidebar from '../components/Sidebar';

const NoteDetails = () => {
  const [summary, setSummary] = useState("This is a summarized version of the note...");
  const [quizQuestions, setQuizQuestions] = useState([
    "What is the main idea of the note?",
    "List two important points mentioned.",
    "How can the concept be applied practically?"
  ]);
  const [originalNote, setOriginalNote] = useState("This is the full original note content that the user uploaded. It can be long and detailed...");

  return (
    <div className="note-details-container">
      <Sidebar />

      <main className="note-details-main">
        <h2>📄 Note Details</h2>

        <section className="original-note">
          <h3>📝 Original Note</h3>
          <p>{originalNote}</p>
        </section>

        <section className="note-summary">
          <h3>🧠 AI-Generated Summary</h3>
          <textarea 
            value={summary} 
            onChange={(e) => setSummary(e.target.value)} 
            rows={6}
          />
        </section>

        <section className="quiz-section">
          <h3>📚 Quiz Questions</h3>
          {quizQuestions.map((q, index) => (
            <input 
              key={index}
              type="text"
              value={q}
              onChange={(e) => {
                const updated = [...quizQuestions];
                updated[index] = e.target.value;
                setQuizQuestions(updated);
              }}
            />
          ))}
        </section>

        <section className="export-options">
          <h3>📤 Export Options</h3>
          <button className="export-btn">Download Summary as PDF</button>
          <button className="export-btn">Download Quiz as PDF</button>
        </section>
      </main>
    </div>
  );
};

export default NoteDetails;

