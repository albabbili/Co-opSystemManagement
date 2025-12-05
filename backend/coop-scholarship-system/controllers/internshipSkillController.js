const InternshipSkill = require('../models/internshipSkillModel');

// Create new relation
exports.createInternshipSkill = async (req, res) => {
  try {
    const { internshipID, skillsID } = req.body;
    if (!internshipID || !skillsID) {
      return res.status(400).json({ error: 'internshipID and skillsID are required' });
    }
    await InternshipSkill.createInternshipSkill(internshipID, skillsID);
    res.status(201).json({ internshipID, skillsID });
  } catch (err) {
    console.error('Error creating internship-skill relation:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all relations
exports.getInternshipSkills = async (req, res) => {
  try {
    const relations = await InternshipSkill.getAllInternshipSkills();
    res.json(relations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get skills by internship
exports.getSkillsByInternship = async (req, res) => {
  try {
    const skills = await InternshipSkill.getSkillsByInternship(req.params.internshipID);
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get internships by skill
exports.getInternshipsBySkill = async (req, res) => {
  try {
    const internships = await InternshipSkill.getInternshipsBySkill(req.params.skillsID);
    res.json(internships);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete relation
exports.deleteInternshipSkill = async (req, res) => {
  try {
    const { internshipID, skillsID } = req.params;
    await InternshipSkill.deleteInternshipSkill(internshipID, skillsID);
    res.json({ message: 'Relation deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};