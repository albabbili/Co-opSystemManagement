// js/logout.js
// Handles clearing client-side session and redirecting to login page

document.addEventListener("DOMContentLoaded", () => {
  // Select all logout links pointing to index.html
  const logoutLinks = document.querySelectorAll('a[href="../index.html"], a[href="index.html"]');

  logoutLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // TODO: Replace with backend logout/session invalidation if implemented
      localStorage.clear();
      sessionStorage.clear();

      // Redirect user to login page
      window.location.href = link.getAttribute("href");
    });
  });
});