// js/faculty-student.js
// Displays a list of students with their academic info and eligibility status

// TODO: Replace localStorage with backend API to fetch student records
const students = JSON.parse(localStorage.getItem("students")) || [
  {
    name: "Alice Johnson",
    major: "Computer Science",
    gpa: 3.6,
    credits: 75
  },
  {
    name: "Bob Smith",
    major: "Information Technology",
    gpa: 2.4,
    credits: 80
  },
  {
    name: "Carol Lee",
    major: "Computer Engineering",
    gpa: 2.9,
    credits: 58
  }
];

const tableBody = document.getElementById("studentsTableBody");

// Populate student table with GPA, credits, and eligibility
function renderStudents() {
  tableBody.innerHTML = "";

  students.forEach(student => {
    const eligible = student.gpa >= 2.5 && student.credits >= 60;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.major}</td>
      <td>${student.gpa.toFixed(2)}</td>
      <td>${student.credits}</td>
      <td style="color: ${eligible ? '#007E33' : '#CC0000'};">
        ${eligible ? "Eligible" : "Ineligible"}
      </td>
    `;

    tableBody.appendChild(row);
  });
}

// Render the table on page load
renderStudents();