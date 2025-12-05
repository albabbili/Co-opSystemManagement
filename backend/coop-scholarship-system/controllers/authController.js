const jwt = require('jsonwebtoken');
const User = require('../models/systemUserModel');

// Login without hashing
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findUserByEmail(email);

    if (!user) return res.status(404).json({ error: 'User not found' });

    // Plain text comparison
    if (password !== user.userPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT with role
    const token = jwt.sign(
      { userID: user.userID, role: user.userRole },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token, role: user.userRole });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};