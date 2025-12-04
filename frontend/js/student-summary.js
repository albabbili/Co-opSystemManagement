// js/student-summary.js
// Handles student co-op summary submission

const textarea = document.getElementById("summaryText");
const form = document.getElementById("summaryForm");
const savedMessage = document.getElementById("savedMessage");

// Load saved summary if it exists
// BACKEND PLACEHOLDER: Replace with API GET call to fetch saved summary
const saved = localStorage.getItem("coopSummary");
if (saved) {
  textarea.value = saved;
  savedMessage.textContent = "Your summary is saved.";
}

// Save summary on form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const summary = textarea.value.trim();

  if (summary.length === 0) {
    savedMessage.style.color = "red";
    savedMessage.textContent = "Please enter your summary before submitting.";
    return;
  }

  // BACKEND PLACEHOLDER: Send summary to server via API POST/PUT
  localStorage.setItem("coopSummary", summary);
  savedMessage.style.color = "green";
  savedMessage.textContent = "Summary saved successfully!";
});