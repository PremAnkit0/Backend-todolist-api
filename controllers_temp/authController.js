const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = new User({ username, password: hashedPassword });
    await user.save();

    // Generate token
    const token = jwt.sign(
  { id: user._id, username: user.username },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);

    res.status(201).json({ message: 'User registered', token }); // return token here

  } catch (err) {
    res.status(500).json({ error: 'Registration failed', details: err.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
  { id: user._id, username: user.username },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);

    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};