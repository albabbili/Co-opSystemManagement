const db = require('../config/db');

// Create a new system user
async function createUser(email, userPassword, userRole) {
  const [result] = await db.query(
    'INSERT INTO SystemUser (email, userPassword, userRole) VALUES (?, ?, ?)',
    [email, userPassword, userRole]
  );
  return result.insertId; // AUTO_INCREMENT userID returned
}

// Get all users
async function getAllUsers() {
  const [rows] = await db.query('SELECT * FROM SystemUser');
  return rows;
}

// Get user by ID
async function getUserById(userID) {
  const [[user]] = await db.query('SELECT * FROM SystemUser WHERE userID=?', [userID]);
  return user;
}

// Delete user
async function deleteUser(userID) {
  await db.query('DELETE FROM SystemUser WHERE userID=?', [userID]);
  return true;
}

// Find user by email
async function findUserByEmail(email) {
  const [[user]] = await db.query('SELECT * FROM SystemUser WHERE email=?', [email]);
  return user;
}

module.exports = { createUser, getAllUsers, getUserById, deleteUser, findUserByEmail };