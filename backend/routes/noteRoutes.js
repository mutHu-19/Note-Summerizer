const express = require('express');
const multer = require('multer');
const { uploadNote, getNotes, getNoteById } = require('../controllers/noteController');
const auth = require('../middlewares/auth');

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/upload', auth, upload.single('file'), uploadNote);
router.get('/:id', auth, getNoteById);
module.exports = router;
