const InternshipOffer = require('../models/internshipOfferModel');

// Create new internship offer
exports.createInternshipOffer = async (req, res) => {
  try {
    const { internshipID, studentID, offerLetterURL } = req.body;
    if (!internshipID || !studentID || !offerLetterURL) {
      return res.status(400).json({ error: 'internshipID, studentID, and offerLetterURL are required' });
    }
    await InternshipOffer.createInternshipOffer(internshipID, studentID, offerLetterURL);
    res.status(201).json({ internshipID, studentID, offerLetterURL });
  } catch (err) {
    console.error('Error creating internship offer:', err);
    res.status(500).json({ error: err.message || 'Unknown error' });
  }
};

// Get all internship offers
exports.getInternshipOffers = async (req, res) => {
  try {
    const offers = await InternshipOffer.getAllInternshipOffers();
    res.json(offers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get internship offer by URL
exports.getInternshipOffer = async (req, res) => {
  try {
    const offer = await InternshipOffer.getInternshipOfferByURL(req.params.url);
    if (!offer) return res.status(404).json({ error: 'Internship offer not found' });
    res.json(offer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete internship offer
exports.deleteInternshipOffer = async (req, res) => {
  try {
    await InternshipOffer.deleteInternshipOffer(req.params.url);
    res.json({ message: 'Internship offer deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};