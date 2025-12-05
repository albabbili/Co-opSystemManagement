const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');

// CRUD endpoints
router.post('/', departmentController.createDepartment);
router.get('/', departmentController.getDepartments);
router.get('/:id', departmentController.getDepartment);
router.delete('/:id', departmentController.deleteDepartment);

module.exports = router;