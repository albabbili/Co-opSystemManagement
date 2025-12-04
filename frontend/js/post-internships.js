// js/post-internship.js
// Employer: Post New Internship

const form = document.getElementById("internshipForm");
const message = document.getElementById("postMessage");

// Save internship locally (temporary until backend is ready)
function saveInternship(internship) {
  const internships = JSON.parse(localStorage.getItem("internships")) || [];
  internships.push(internship);
  localStorage.setItem("internships", JSON.stringify(internships));

  // BACKEND PLACEHOLDER: Replace this with API POST request
}

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const internship = {
    id: Date.now(), // unique ID
    title: document.getElementById("jobTitle").value.trim(),
    description: document.getElementById("jobDescription").value.trim(),
    weeks: parseInt(document.getElementById("weeks").value, 10),
    hoursPerWeek: parseInt(document.getElementById("hoursPerWeek").value, 10),
    location: document.getElementById("jobLocation").value.trim(),
    majors: document.getElementById("majors").value.trim(),
    requiredSkills: document.getElementById("requiredSkills").value.trim(),
    preferredSkills: document.getElementById("preferredSkills").value.trim(),
    salary: document.getElementById("salary").value.trim(),
    status: "open"
  };

  saveInternship(internship);

  message.textContent = "Internship posted successfully!";
  form.reset();
});