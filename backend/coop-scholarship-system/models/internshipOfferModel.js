const db = require('../config/db');

// Create a new internship offer
async function createInternshipOffer(internshipID, studentID, offerLetterURL) {
  const [result] = await db.query(
    'INSERT INTO InternshipOffer (internshipID, studentID, offerLetterURL) VALUES (?, ?, ?)',
    [internshipID, studentID, offerLetterURL]
  );
  return result; // PK is offerLetterURL, so insertId is not meaningful
}

// Get all internship offers
async function getAllInternshipOffers() {
  const [rows] = await db.query('SELECT * FROM InternshipOffer');
  return rows;
}

// Get internship offer by offerLetterURL
async function getInternshipOfferByURL(offerLetterURL) {
  const [[offer]] = await db.query('SELECT * FROM InternshipOffer WHERE offerLetterURL=?', [offerLetterURL]);
  return offer;
}

// Delete internship offer
async function deleteInternshipOffer(offerLetterURL) {
  await db.query('DELETE FROM InternshipOffer WHERE offerLetterURL=?', [offerLetterURL]);
  return true;
}

module.exports = { 
  createInternshipOffer, 
  getAllInternshipOffers, 
  getInternshipOfferByURL, 
  deleteInternshipOffer 
};