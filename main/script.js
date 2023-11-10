// script.js

// For smooth scrolling
document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href");

    window.scrollTo({
      top: document.querySelector(href).offsetTop,
      behavior: "smooth",
    });

    // Mark the clicked menu item as active
    document
      .querySelectorAll(".main-menu-item, .sub-menu li")
      .forEach((item) => {
        item.classList.remove("active");
      });
    this.parentElement.classList.add("active"); // Mark the li element as active
  });
});

// For updating the menu based on scrolling
window.addEventListener("scroll", function () {
  document
    .querySelectorAll(
      "#section1, #section2, #sub-section_1_1, #sub-section_1_2, #sub-section_2_1, #sub-section_2_2"
    )
    .forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        document
          .querySelectorAll(".main-menu-item, .sub-menu li")
          .forEach((item) => {
            item.classList.remove("active");
          });
        const activeLink = document.querySelector(`a[href="#${section.id}"]`);
        activeLink.parentElement.classList.add("active"); // Mark the li element as active
      }
    });
});
