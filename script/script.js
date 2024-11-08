// Show the newsletter modal when the page finishes loading
window.addEventListener("load", function () {
  var newsletterModal = new bootstrap.Modal(
    document.getElementById("newsletterModal")
  );
  newsletterModal.show();
});
