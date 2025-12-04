// js/student-applications.js
// Displays internships the student has applied to (temporary localStorage logic)

const container = document.getElementById("appliedResults");

function loadApplications() {
  // TODO: Replace localStorage with backend API calls
  const applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];
  const internships = JSON.parse(localStorage.getItem("internships")) || [];

  // Show message if no applications are found
  if (applied.length === 0) {
    container.innerHTML = "<p>You haven’t applied to any internships yet.</p>";
    return;
  }

  // Match applied job IDs with internship records
  const filtered = internships.filter(job => applied.includes(job.id));

  // Render each application as a card
  filtered.forEach(job => {
    const card = document.createElement("div");
    card.className = "card job-card";

    card.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>${job.company}</strong> • ${job.location}</p>
      <p>${job.description}</p>
      <button class="btn" disabled>Applied</button>
    `;

    container.appendChild(card);
  });
}

// Initialize view
loadApplications();