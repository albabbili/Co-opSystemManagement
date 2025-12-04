// js/faculty-grades.js
// Faculty grading interface for assigning final grades to completed co-ops

// TEMP DATA: Replace with API/database fetch
const completedCoops = JSON.parse(localStorage.getItem("completedCoops")) || [
  { studentName: "Alice Johnson", coopTitle: "Software Intern", grade: "" },
  { studentName: "Bob Smith", coopTitle: "Web Dev Intern", grade: "A" },
  { studentName: "Carol Lee", coopTitle: "IT Support Co-op", grade: "" }
];

const tableBody = document.getElementById("gradesTableBody");

// Populate the table with co-op records and grade selectors
function renderGradeTable() {
  tableBody.innerHTML = "";

  completedCoops.forEach((coop, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${coop.studentName}</td>
      <td>${coop.coopTitle}</td>
      <td>${coop.grade || "N/A"}</td>
      <td>
        <select id="gradeSelect-${index}">
          <option value="">-- Select --</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="F">F</option>
        </select>
      </td>
      <td>
        <button class="btn" onclick="assignGrade(${index})">Save</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

// Assign grade to student and update storage
// TODO: Replace localStorage with backend API call
function assignGrade(index) {
  const select = document.getElementById(`gradeSelect-${index}`);
  const selectedGrade = select.value;

  if (!selectedGrade) {
    alert("Please select a grade before saving.");
    return;
  }

  completedCoops[index].grade = selectedGrade;
  localStorage.setItem("completedCoops", JSON.stringify(completedCoops));
  renderGradeTable();
}

// Initialize table on page load
renderGradeTable();