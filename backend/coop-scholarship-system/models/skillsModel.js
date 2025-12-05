const db = require('../config/db');

// Create a new skills record
async function createSkills(requiredSkills, preferredSkills) {
  const [result] = await db.query(
    'INSERT INTO Skills (requiredSkills, preferredSkills) VALUES (?, ?)',
    [requiredSkills, preferredSkills]
  );
  return result.insertId; // AUTO_INCREMENT skillsID returned
}

// Get all skills
async function getAllSkills() {
  const [rows] = await db.query('SELECT * FROM Skills');
  return rows;
}

// Get skills by ID
async function getSkillsById(skillsID) {
  const [[skills]] = await db.query('SELECT * FROM Skills WHERE skillsID=?', [skillsID]);
  return skills;
}

// Delete skills
async function deleteSkills(skillsID) {
  await db.query('DELETE FROM Skills WHERE skillsID=?', [skillsID]);
  return true;
}

module.exports = { createSkills, getAllSkills, getSkillsById, deleteSkills };