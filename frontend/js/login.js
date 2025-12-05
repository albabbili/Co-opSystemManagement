// js/login.js
// Handles role-based login with backend authentication

const form = document.getElementById("loginForm");
const message = document.getElementById("loginMessage");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim(); // add password field in your form

  // Basic validation
  if (!email || !password) {
    message.textContent = "Please enter your email and password.";
    return;
  }

  try {
    // Call backend login API
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      message.textContent = data.error || "Login failed.";
      return;
    }

    // Save token and role in localStorage
    localStorage.setItem("token", data.token);
    localStorage.setItem("userRole", data.role);

    // Redirect to role-specific dashboard
    switch (data.role.toLowerCase()) {
      case "student":
        window.location.href = "student/student-dashboard.html";
        break;
      case "employer":
        window.location.href = "employer/employer-dashboard.html";
        break;
      case "faculty":
        window.location.href = "faculty/faculty-dashboard.html";
        break;
      case "admin":
        window.location.href = "admin/admin-dashboard.html";
        break;
      default:
        message.textContent = "Invalid role.";
    }
  } catch (err) {
    console.error("Login error:", err);
    message.textContent = "Server error. Please try again later.";
  }
});