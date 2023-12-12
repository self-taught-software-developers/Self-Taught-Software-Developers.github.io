// Close mobile menu on link click

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navbar-nav a");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      // Close the mobile menu by selecting the toggle button and triggering a click
      const toggleButton = document.querySelector(".navbar-toggler");
      if (
        toggleButton &&
        toggleButton.getAttribute("aria-expanded") === "true"
      ) {
        toggleButton.click();
      }
    });
  });
});

// Copyright year

(function outputCopyrightYear() {
  let year = new Date().getFullYear();
  document.getElementById("copyright-year").innerText = year;
})();
