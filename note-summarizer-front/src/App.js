// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing page components
import LandingPage from './pages/LandingPage';
import SignUpPage from './components/SignUp';
import LoginPage from './components/Login';
import DashboardPage from './pages/Dashboard';
import UploadPage from './pages/Upload';
import NoteDetails from './pages/NoteDetail';
import QuizPage from './pages/Quize';
import ResultsPage from './pages/Result';
import ProfilePage from './pages/Profile';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/notes/:id" element={<NoteDetails />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/results/:id" element={<ResultsPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* Catch-all Route for 404 Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
