const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

// CRUD endpoints
router.post('/', companyController.createCompany);
router.get('/', companyController.getCompanies);
router.get('/:id', companyController.getCompany);
router.delete('/:id', companyController.deleteCompany);

module.exports = router;