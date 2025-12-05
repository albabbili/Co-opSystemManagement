const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skillsController');

// CRUD endpoints
router.post('/', skillsController.createSkills);
router.get('/', skillsController.getSkills);
router.get('/:id', skillsController.getSkillsById);
router.delete('/:id', skillsController.deleteSkills);

module.exports = router;