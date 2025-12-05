const express = require('express');
const router = express.Router();
const internshipSkillController = require('../controllers/internshipSkillController');

// CRUD endpoints
router.post('/', internshipSkillController.createInternshipSkill);
router.get('/', internshipSkillController.getInternshipSkills);
router.get('/internship/:internshipID', internshipSkillController.getSkillsByInternship);
router.get('/skill/:skillsID', internshipSkillController.getInternshipsBySkill);
router.delete('/:internshipID/:skillsID', internshipSkillController.deleteInternshipSkill);

module.exports = router;