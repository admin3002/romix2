/* script.js */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const backToTop = document.querySelector(".back-to-top");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

const sections = document.querySelectorAll("section[id]");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const id = entry.target.getAttribute("id");
      navItems.forEach((item) => {
        item.classList.toggle("active", item.getAttribute("href") === `#${id}`);
      });
    });
  },
  {
    rootMargin: "-40% 0px -55% 0px",
    threshold: 0
  }
);

sections.forEach((section) => observer.observe(section));