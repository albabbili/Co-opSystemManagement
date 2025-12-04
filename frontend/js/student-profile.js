// js/student-profile.js
// Student Profile Form

const resumeInput = document.getElementById('resume');
const fileNameDisplay = document.getElementById('file-name');

// Display selected resume file name
resumeInput.addEventListener('change', () => {
  const file = resumeInput.files[0];
  fileNameDisplay.textContent = file ? `Selected: ${file.name}` : '';
});

// Handle student profile form submission
const studentForm = document.getElementById('studentForm');
studentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // BACKEND PLACEHOLDER: Replace with API call to save student profile and resume
  alert("Profile saved (simulated).");
});