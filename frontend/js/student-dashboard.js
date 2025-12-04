// js/main.js
// Student Dashboard Logic: applications, summary, eligibility, co-op credit

// DOM Elements
const applicationCount = document.getElementById("applicationCount");
const eligibilityText = document.getElementById("eligibilityText");
const summaryStatus = document.getElementById("summaryStatus");
const tableBody = document.getElementById("applicationTableBody");
const card = document.getElementById("coopInterestCard");
const button = document.getElementById("expressInterestBtn");
const message = document.getElementById("interestMessage");

// Fetch student dashboard data from backend
async function fetchStudentData() {
  try {
    // BACKEND PLACEHOLDER: Replace with actual fetch to student dashboard API
    const res = await fetch("/api/student/dashboard");
    const data = await res.json();

    updateSummary(data);
    renderApplications(data.applications);
    handleCoopInterest(data.eligibility, data.wantsCoopCredit);
  } catch (error) {
    console.error("Failed to load student data:", error);
  }
}

// Update summary cards
function updateSummary(data) {
  applicationCount.innerHTML = `${data.applications.length} Active<br/>Applications`;

  const isEligible = data.eligibility;
  eligibilityText.textContent = isEligible ? "Eligible" : "Ineligible";
  eligibilityText.classList.toggle("ineligible", !isEligible);

  summaryStatus.innerHTML = data.summarySubmitted
    ? `<span style="color: green;">Submitted</span>`
    : `<span style="color: red;">Pending<br/>Submission</span>`;
}

// Render applications table
function renderApplications(applications) {
  tableBody.innerHTML = "";

  applications.forEach(app => {
    const statusClass = app.status.toLowerCase();
    const row = `
      <tr>
        <td><strong>${app.title}</strong></td>
        <td>${app.employer}</td>
        <td><span class="badge ${statusClass}">${app.status}</span></td>
        <td>${app.date}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Handle co-op credit opt-in logic
function handleCoopInterest(isEligible, alreadyOptedIn) {
  if (!isEligible) {
    if (card) card.style.display = "none";
    return;
  }

  card.style.display = "block";

  if (alreadyOptedIn) {
    button.style.display = "none";
    message.textContent = "You have opted in for co-op credit.";
    message.style.color = "green";
    return;
  }

  button.addEventListener("click", async () => {
    try {
      // BACKEND PLACEHOLDER: Replace with API call to save coop interest
      await fetch("/api/student/coop-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wantsCoopCredit: true })
      });

      button.style.display = "none";
      message.textContent = "You have opted in for co-op credit.";
      message.style.color = "green";
    } catch (error) {
      console.error("Error updating interest:", error);
    }
  });
}

// Initialize
fetchStudentData();