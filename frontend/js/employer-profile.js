// js/employer-profile.js
// Handles employer profile form (temporary localStorage logic)

// Form and message element references
const form = document.getElementById('employerForm');
const message = document.getElementById('saveMessage');

// Populate form fields with saved profile data (if available)
window.addEventListener('DOMContentLoaded', () => {
  const saved = JSON.parse(localStorage.getItem('employerProfile')) || {};

  Object.entries(saved).forEach(([key, value]) => {
    const input = document.getElementById(key);
    if (input) input.value = value;
  });
});

// Handle profile form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    companyName: document.getElementById('companyName').value.trim(),
    location: document.getElementById('location').value.trim(),
    website: document.getElementById('website').value.trim(),
    contactName: document.getElementById('contactName').value.trim(),
    contactEmail: document.getElementById('contactEmail').value.trim(),
    contactPhone: document.getElementById('contactPhone').value.trim()
  };

  // TODO: Replace localStorage with API call to persist employer profile to backend
  localStorage.setItem('employerProfile', JSON.stringify(data));
  message.textContent = "Profile saved successfully!";
});