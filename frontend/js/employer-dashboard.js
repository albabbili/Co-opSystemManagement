// js/employer-dashboard.js
// This script updates the employer dashboard with job statistics and listings

// Get references to summary card elements
const openCount = document.getElementById("openCount");
const pendingCount = document.getElementById("pendingCount");
const closedCount = document.getElementById("closedCount");

// Get reference to the job listings table body
const jobsTableBody = document.getElementById("jobsTableBody");

function loadDashboard() {
  // Get all posted internships from localStorage
  // TODO: Replace with a backend API call when available
  const jobs = JSON.parse(localStorage.getItem("internships")) || [];

  // Track how many jobs are open, pending, or closed
  let open = 0, pending = 0, closed = 0;

  jobs.forEach(job => {
    const status = (job.status || "").toLowerCase();

    if (status === "open") open++;
    else if (status === "pending") pending++;
    else if (status === "closed") closed++;
  });

  // Update the summary cards on the dashboard
  openCount.innerHTML = `${open} Position${open !== 1 ? "s" : ""}<br>Open`;
  pendingCount.innerHTML = `${pending} Awaiting<br>Review`;
  closedCount.innerHTML = `${closed} Position${closed !== 1 ? "s" : ""}<br>Filled`;

  // Clear the current table
  jobsTableBody.innerHTML = "";

  // Add each job to the table
  jobs.forEach(job => {
    const status = job.status || "open";
    const statusClass = status.toLowerCase();
    const applicants = job.applicants || 0;
    const lastUpdated = job.lastUpdated || "—";

    const row = `
      <tr>
        <td><strong>${job.title}</strong></td>
        <td><span class="badge ${statusClass}">${status}</span></td>
        <td>${applicants}</td>
        <td>${lastUpdated}</td>
      </tr>
    `;
    jobsTableBody.innerHTML += row;
  });
}

// Run when the page loads
loadDashboard();