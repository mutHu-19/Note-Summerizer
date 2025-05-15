const express = require('express');
const multer = require('multer');
const path = require('path');
const {
  uploadNote,
  getNotes,
  getNoteById,
} = require('../controllers/noteController');
const auth = require('../middlewares/auth');

const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Make sure this folder exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only PDF, JPG, and PNG files are allowed!'), false);
  }
};

const upload = multer({ storage, fileFilter });

// Routes
router.post('/upload', auth, upload.single('file'), uploadNote);
router.get('/:id', auth, getNoteById);
router.get('/', auth, getNotes); // Optional: if you want to fetch all notes

module.exports = router;
