const db = require('../config/db');

// Create a new internship-skill relation
async function createInternshipSkill(internshipID, skillsID) {
  const [result] = await db.query(
    'INSERT INTO InternshipSkill (internshipID, skillsID) VALUES (?, ?)',
    [internshipID, skillsID]
  );
  return result; // composite key, no insertId
}

// Get all internship-skill relations
async function getAllInternshipSkills() {
  const [rows] = await db.query('SELECT * FROM InternshipSkill');
  return rows;
}

// Get skills for a specific internship
async function getSkillsByInternship(internshipID) {
  const [rows] = await db.query('SELECT * FROM InternshipSkill WHERE internshipID=?', [internshipID]);
  return rows;
}

// Get internships for a specific skill
async function getInternshipsBySkill(skillsID) {
  const [rows] = await db.query('SELECT * FROM InternshipSkill WHERE skillsID=?', [skillsID]);
  return rows;
}

// Delete relation
async function deleteInternshipSkill(internshipID, skillsID) {
  await db.query('DELETE FROM InternshipSkill WHERE internshipID=? AND skillsID=?', [internshipID, skillsID]);
  return true;
}

module.exports = { 
  createInternshipSkill, 
  getAllInternshipSkills, 
  getSkillsByInternship, 
  getInternshipsBySkill, 
  deleteInternshipSkill 
};