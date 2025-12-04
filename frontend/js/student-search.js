// js/student-search.js
// Internship search and apply logic

// BACKEND PLACEHOLDER: Replace static array with API call or dynamic fetch
const internships = JSON.parse(localStorage.getItem("internships")) || [];

// Get applied job IDs
function getAppliedJobs() {
  return JSON.parse(localStorage.getItem("appliedJobs")) || [];
}

// Save job application
function applyToJob(jobId) {
  const applied = getAppliedJobs();
  if (!applied.includes(jobId)) {
    applied.push(jobId);
    // BACKEND PLACEHOLDER: Replace with API POST call to register application
    localStorage.setItem("appliedJobs", JSON.stringify(applied));
  }
}

// DOM elements
const resultsContainer = document.querySelector(".search-results");
const keywordInput = document.querySelector('input[type="text"]');
const companySelect = document.querySelectorAll("select")[0];
const locationSelect = document.querySelectorAll("select")[1];
const typeSelect = document.querySelectorAll("select")[2];
const searchBtn = document.querySelector(".search-bar .btn");

// Render internship cards
function renderInternships(data) {
  const applied = getAppliedJobs();
  resultsContainer.innerHTML = "";

  if (data.length === 0) {
    resultsContainer.innerHTML = "<p>No results found.</p>";
    return;
  }

  data.forEach(job => {
    const isApplied = applied.includes(job.id);
    const card = document.createElement("div");
    card.className = "card job-card";

    card.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>${job.company}</strong> • ${job.location}</p>
      <p>${job.description}</p>
      <button class="btn" ${isApplied ? "disabled" : ""}>
        ${isApplied ? "Applied ✅" : "Apply"}
      </button>
    `;

    if (!isApplied) {
      card.querySelector("button").addEventListener("click", () => {
        applyToJob(job.id);
        renderInternships(data); // Refresh view
      });
    }

    resultsContainer.appendChild(card);
  });
}

// Filter internships based on search inputs
function filterJobs() {
  const keyword = keywordInput.value.toLowerCase();
  const company = companySelect.value;
  const location = locationSelect.value;
  const type = typeSelect.value;

  const filtered = internships.filter(job =>
    (keyword === "" || job.title.toLowerCase().includes(keyword) || job.description.toLowerCase().includes(keyword)) &&
    (company === "" || job.company === company) &&
    (location === "" || job.location === location) &&
    (type === "" || job.type === type)
  );

  renderInternships(filtered);
}

// Event: Search button
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  filterJobs();
});

// Initial load
renderInternships(internships);