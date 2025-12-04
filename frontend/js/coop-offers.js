// js/coop-offers.js
// Handles co-op offer submission (temporary localStorage; backend integration pending)

const form = document.getElementById("coopOfferForm");
const jobSelect = document.getElementById("jobTitle");
const fileNameDisplay = document.getElementById("file-name");
const message = document.getElementById("offerMessage");

// Load available job titles into dropdown (status: open)
function populateJobTitles() {
  // TODO: Replace localStorage with API fetch
  const internships = JSON.parse(localStorage.getItem("internships")) || [];
  const openJobs = internships.filter(job => job.status.toLowerCase() === "open");

  openJobs.forEach(job => {
    const option = document.createElement("option");
    option.value = job.id;
    option.textContent = job.title;
    jobSelect.appendChild(option);
  });
}

// Show uploaded filename in UI
document.getElementById("offerLetter").addEventListener("change", (e) => {
  const file = e.target.files[0];
  fileNameDisplay.textContent = file ? `Selected: ${file.name}` : "";
});

// Submit form data to localStorage (placeholder for backend)
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const offer = {
    jobId: jobSelect.value,
    jobTitle: jobSelect.options[jobSelect.selectedIndex].text,
    studentName: document.getElementById("studentName").value.trim(),
    offerLetter: document.getElementById("offerLetter").files[0]?.name || "N/A",
    status: "Pending"
  };

  // TODO: Send offer to backend instead of localStorage
  const offers = JSON.parse(localStorage.getItem("coopOffers")) || [];
  offers.push(offer);
  localStorage.setItem("coopOffers", JSON.stringify(offers));

  message.textContent = "Co-op offer submitted successfully!";
  form.reset();
  fileNameDisplay.textContent = "";
});

// Initialize dropdown on page load
populateJobTitles();