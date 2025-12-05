const db = require('../config/db');

// Create a new student
async function createStudent(userID, departmentID, resumeURL) {
  const [result] = await db.query(
    'INSERT INTO Student (userID, departmentID, resumeURL) VALUES (?, ?, ?)',
    [userID, departmentID, resumeURL]
  );
  return result.insertId; // AUTO_INCREMENT studentID returned
}

// Get all students
async function getAllStudents() {
  const [rows] = await db.query('SELECT * FROM Student');
  return rows;
}

// Get student by ID
async function getStudentById(studentID) {
  const [[student]] = await db.query('SELECT * FROM Student WHERE studentID=?', [studentID]);
  return student;
}

// Delete student
async function deleteStudent(studentID) {
  await db.query('DELETE FROM Student WHERE studentID=?', [studentID]);
  return true;
}

module.exports = { createStudent, getAllStudents, getStudentById, deleteStudent };