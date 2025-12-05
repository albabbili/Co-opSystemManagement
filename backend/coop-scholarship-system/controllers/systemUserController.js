const SystemUser = require('../models/systemUserModel');

// Create new user
exports.createUser = async (req, res) => {
  try {
    const { email, userPassword, userRole } = req.body;
    if (!email || !userPassword || !userRole) {
      return res.status(400).json({ error: 'email, userPassword, and userRole are required' });
    }
    const userID = await SystemUser.createUser(email, userPassword, userRole);
    res.status(201).json({ userID, email, userRole });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await SystemUser.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get user by ID
exports.getUser = async (req, res) => {
  try {
    const user = await SystemUser.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    await SystemUser.deleteUser(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};