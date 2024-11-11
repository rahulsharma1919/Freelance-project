document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("main h1");
  const navLinks = document.querySelectorAll(".sidebar .list-group-item");

  function activateLink() {
    let index = sections.length;

    while (--index && window.scrollY + 150 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  activateLink(); // Activate the correct link on initial load
  window.addEventListener("scroll", activateLink);
});
