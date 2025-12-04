// js/faculty-dashboard.js
// Faculty dashboard for displaying student co-op summaries and counts

// TEMP DATA: Replace with backend data source when available
const studentCoops = [
  { name: "Alice Johnson", title: "Software Intern", status: "Active", grade: "N/A" },
  { name: "Bob Smith", title: "Web Dev Intern", status: "Pending", grade: "N/A" },
  { name: "Carol Lee", title: "IT Support Co-op", status: "Completed", grade: "A" },
  { name: "David Kim", title: "Cybersecurity Analyst", status: "Completed", grade: "B+" },
  { name: "Eva Brown", title: "Data Science Intern", status: "Active", grade: "N/A" }
];

// DOM references for summary cards and table body
const activeCount = document.getElementById("activeCount");
const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");
const tableBody = document.getElementById("facultyTableBody");

// Populate dashboard summary cards
function updateDashboardCards() {
  const active = studentCoops.filter(s => s.status === "Active").length;
  const pending = studentCoops.filter(s => s.status === "Pending").length;
  const completed = studentCoops.filter(s => s.status === "Completed").length;

  activeCount.innerHTML = `${active} Active`;
  pendingCount.innerHTML = `${pending} Awaiting<br>Review`;
  completedCount.innerHTML = `${completed} Completed`;
}

// Populate co-op records table
function renderTable() {
  tableBody.innerHTML = "";

  studentCoops.forEach(student => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.title}</td>
      <td><span class="badge ${student.status.toLowerCase()}">${student.status}</span></td>
      <td>${student.grade}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Initialize dashboard view
updateDashboardCards();
renderTable();