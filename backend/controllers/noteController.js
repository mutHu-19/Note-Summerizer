const Note = require('../models/Note');
const parsePDF = require('../utils/pdfParser');
const { summarizeText, generateQuiz } = require('../services/aiService');

exports.uploadNote = async (req, res) => {
  try {
    const { title, category, text } = req.body;
    const file = req.file;

    if (!title || !category || (!text && !file)) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    let finalText = text || '';

    if (file && file.mimetype === 'application/pdf') {
      finalText = await parsePDF(file.path);
    }

    const summary = await summarizeText(finalText);
    const quizzes = await generateQuiz(finalText);

    const note = await Note.create({
      title,
      category,
      user: req.user.id,
      originalText: finalText,
      summary,
      quizzes,
      filePath: file ? file.path : null,
    });

    res.status(201).json({ message: 'Note uploaded successfully.', note });
  } catch (err) {
    console.error('Upload Note Error:', err);
    res.status(500).json({ message: 'Server error while uploading note.' });
  }
};

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch notes' });
  }
};

exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id, user: req.user.id });

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
