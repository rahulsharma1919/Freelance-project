// Show the newsletter modal when the page finishes loading
window.addEventListener("load", function () {
  var newsletterModal = new bootstrap.Modal(
    document.getElementById("newsletterModal")
  );
  newsletterModal.show();
});

// Toggle the arrow icon on collapse toggle
const dropdownButtons = document.querySelectorAll(
  '.btn-link[data-bs-toggle="collapse"]'
);
dropdownButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const icon = this.querySelector(".dropdown-icon");
    if (this.getAttribute("aria-expanded") === "true") {
      icon.classList.remove("fa-angle-down");
      icon.classList.add("fa-angle-up");
    } else {
      icon.classList.remove("fa-angle-up");
      icon.classList.add("fa-angle-down");
    }
  });
});
