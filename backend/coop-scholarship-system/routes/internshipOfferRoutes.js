const express = require('express');
const router = express.Router();
const internshipOfferController = require('../controllers/internshipOfferController');

// CRUD endpoints
router.post('/', internshipOfferController.createInternshipOffer);
router.get('/', internshipOfferController.getInternshipOffers);
router.get('/:url', internshipOfferController.getInternshipOffer);
router.delete('/:url', internshipOfferController.deleteInternshipOffer);

module.exports = router;