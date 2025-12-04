// js/manage-applications.js
// Manage Employer Applications Page

// BACKEND PLACEHOLDER: Replace with real API fetch in production

// Load applications (temporary local mock)
function loadApplications() {
  // TODO: Replace with API call, e.g., fetch('/api/employer/applications')
  return JSON.parse(localStorage.getItem("applications")) || [
    { jobTitle: "Software Intern", applicant: "Alice Johnson", status: "Pending" },
    { jobTitle: "Web Developer", applicant: "Bob Smith", status: "Reviewed" }
  ];
}

// Save applications locally (temporary until backend is implemented)
function saveApplications(apps) {
  // TODO: Replace with API update call (PATCH/PUT)
  localStorage.setItem("applications", JSON.stringify(apps));
}

// Initialize
let applications = loadApplications();
const tableBody = document.getElementById("applicationsTableBody");

// Render the applications table
function renderApplications() {
  tableBody.innerHTML = "";

  applications.forEach((app, index) => {
    const statusClass = app.status.toLowerCase(); 
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${app.jobTitle}</td>
      <td>${app.applicant}</td>
      <td><span class="badge ${statusClass}">${app.status}</span></td>
      <td>
        <button class="btn" onclick="viewApplication('${app.applicant}')">View</button>
        <button class="btn" onclick="markPending(${index})">Mark as Pending</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

// View a single application
function viewApplication(applicantName) {
  // TODO: Replace with API call to fetch full application details
  alert(`Viewing application for ${applicantName} (backend placeholder)`);
}

// Mark an application as pending
function markPending(index) {
  applications[index].status = "Pending";

  // TODO: Replace with PATCH/PUT API request
  saveApplications(applications);
  renderApplications();
}

// Initialize on page load
renderApplications();