const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');



router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Server error while registering user' });
  }
});
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password', success: false });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password', success: false });
    }


    res.status(200).json({ message: 'Login successful', success: true, token: 'yourTokenHere' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error', success: false });
  }
});
module.exports = router;
