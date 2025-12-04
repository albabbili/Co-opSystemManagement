// js/login.js
// Handles role-based login and basic client-side session storage

const form = document.getElementById("loginForm");
const message = document.getElementById("loginMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const role = document.getElementById("role").value;

  // Basic validation
  if (!email || !role) {
    message.textContent = "Please enter your email and select a role.";
    return;
  }

  // TODO: Replace with backend login/authentication
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userRole", role);

  // Redirect to role-specific dashboard
  switch (role) {
    case "student":
      window.location.href = "student/student-dashboard.html";
      break;
    case "employer":
      window.location.href = "employer/employer-dashboard.html";
      break;
    case "faculty":
      window.location.href = "faculty/faculty-dashboard.html";
      break;
    default:
      message.textContent = "Invalid role selected.";
  }
});