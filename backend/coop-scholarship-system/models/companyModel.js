const db = require('../config/db');

// Create a new company
async function createCompany(companyName, companyLocation, companyWebsite, employeeID) {
  const [result] = await db.query(
    'INSERT INTO Company (companyName, companyLocation, companyWebsite, employeeID) VALUES (?, ?, ?, ?)',
    [companyName, companyLocation, companyWebsite, employeeID]
  );
  return result.insertId; // AUTO_INCREMENT companyID returned
}

// Get all companies
async function getAllCompanies() {
  const [rows] = await db.query('SELECT * FROM Company');
  return rows;
}

// Get company by ID
async function getCompanyById(companyID) {
  const [[company]] = await db.query('SELECT * FROM Company WHERE companyID=?', [companyID]);
  return company;
}

// Delete company
async function deleteCompany(companyID) {
  await db.query('DELETE FROM Company WHERE companyID=?', [companyID]);
  return true;
}

module.exports = { createCompany, getAllCompanies, getCompanyById, deleteCompany };