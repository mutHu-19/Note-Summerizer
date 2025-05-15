const Note = require('../models/Note');
const parsePDF = require('../utils/pdfParser');
const { summarizeText, generateQuiz } = require('../services/aiService');

exports.uploadNote = async (req, res) => {
  let text = '';
  if (req.file.mimetype === 'application/pdf') {
    text = await parsePDF(req.file.path);
  } else {
    text = req.body.text;
  }

  const summary = await summarizeText(text);
  const quizzes = await generateQuiz(text);

  const note = await Note.create({
    user: req.user.id,
    originalText: text,
    summary,
    quizzes
  });

  res.json(note);
};

exports.getNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user.id }).sort({ createdAt: -1 });
  res.json(notes);
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
