// js/faculty-summaries.js
// Faculty view of student internship summaries with approval/rejection actions

// TODO: Replace localStorage with real API/database calls
const summaries = JSON.parse(localStorage.getItem("summaries")) || [
  {
    studentName: "Alice Johnson",
    position: "Software Intern",
    summary: "Alice worked on front-end development with the React framework.",
    status: "Pending"
  },
  {
    studentName: "Bob Smith",
    position: "IT Support Co-op",
    summary: "Bob assisted in resolving hardware and software issues.",
    status: "Pending"
  },
  {
    studentName: "Carol Lee",
    position: "Web Developer Intern",
    summary: "Carol built and maintained client websites using HTML/CSS.",
    status: "Approved"
  }
];

const tableBody = document.getElementById("summaryTableBody");

// Render summary table with approval/rejection buttons
function renderSummaries() {
  tableBody.innerHTML = "";

  summaries.forEach((entry, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${entry.studentName}</td>
      <td>${entry.position}</td>
      <td>${entry.summary}</td>
      <td><span class="badge ${entry.status.toLowerCase()}">${entry.status}</span></td>
      <td>
        ${entry.status === "Pending" ? `
          <button class="btn" onclick="approve(${index})">Approve</button>
          <button class="btn" onclick="reject(${index})">Reject</button>
        ` : ""}
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Approve summary
function approve(index) {
  summaries[index].status = "Approved";
  localStorage.setItem("summaries", JSON.stringify(summaries));
  renderSummaries();
}

// Reject summary
function reject(index) {
  summaries[index].status = "Rejected";
  localStorage.setItem("summaries", JSON.stringify(summaries));
  renderSummaries();
}

// Initial render on page load
renderSummaries();