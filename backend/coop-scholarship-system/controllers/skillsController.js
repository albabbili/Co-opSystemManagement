const Skills = require('../models/skillsModel');

// Create new skills record
exports.createSkills = async (req, res) => {
  try {
    const { requiredSkills, preferredSkills } = req.body;
    if (!requiredSkills) {
      return res.status(400).json({ error: 'requiredSkills is required' });
    }
    const skillsID = await Skills.createSkills(requiredSkills, preferredSkills);
    res.status(201).json({ skillsID, requiredSkills, preferredSkills });
  } catch (err) {
    console.error('Error creating skills:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all skills
exports.getSkills = async (req, res) => {
  try {
    const skills = await Skills.getAllSkills();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get skills by ID
exports.getSkillsById = async (req, res) => {
  try {
    const skills = await Skills.getSkillsById(req.params.id);
    if (!skills) return res.status(404).json({ error: 'Skills not found' });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete skills
exports.deleteSkills = async (req, res) => {
  try {
    await Skills.deleteSkills(req.params.id);
    res.json({ message: 'Skills deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};