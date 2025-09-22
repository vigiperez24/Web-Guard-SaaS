// Header blur effect on scroll
const header = document.getElementById("header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Dark / Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const darkLightMode = document.querySelectorAll(".logo-dark-light"); // NodeList

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Change icon and all logos
  if (body.classList.contains("dark-mode")) {
    themeToggle.textContent = "light_mode";
    darkLightMode.forEach((img) => {
      img.src = "assets/headerImg/dark-mode.png";
    });
  } else {
    themeToggle.textContent = "dark_mode";
    darkLightMode.forEach((img) => {
      img.src = "assets/headerImg/light-mode.png";
    });
  }
});

// Mobile Sidebar functionality
const hamburger = document.getElementById("hamburger-btn");
const mobileSidebar = document.getElementById("mobileSidebar");
const overlay = document.getElementById("overlay");
const closeSidebar = document.getElementById("closeSidebar");

// Function to open sidebar
function openSidebar() {
  mobileSidebar.classList.add("active");
  overlay.classList.add("active");
  body.classList.add("sidebar-open"); // Prevent body scroll
}

// Function to close sidebar
function closeSidebarFunc() {
  mobileSidebar.classList.remove("active");
  overlay.classList.remove("active");
  body.classList.remove("sidebar-open");
}

// Event listeners
hamburger.addEventListener("click", openSidebar);
closeSidebar.addEventListener("click", closeSidebarFunc);
overlay.addEventListener("click", closeSidebarFunc);

// Close sidebar on escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && mobileSidebar.classList.contains("active")) {
    closeSidebarFunc();
  }
});

// Close sidebar when clicking on mobile links (optional, for better UX)
const mobileLinks = document.querySelectorAll(".mobile-links a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", closeSidebarFunc);
});

// Handle window resize
window.addEventListener("resize", function () {
  if (window.innerWidth > 768 && mobileSidebar.classList.contains("active")) {
    closeSidebarFunc();
  }
});

// Accordion
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item-container");

  items.forEach((item) => {
    const header = item.querySelector(".faq-group");
    const answer = item.querySelector(".answer");
    const icon = item.querySelector(".toggle-icon");

    header.addEventListener("click", () => {
      // close other open items
      items.forEach((other) => {
        if (other !== item && other.classList.contains("active")) {
          const otherAnswer = other.querySelector(".answer");
          otherAnswer.style.maxHeight = 0;
          other.classList.remove("active");
          other.querySelector(".toggle-icon").textContent = "add";
        }
      });

      // toggle clicked item
      if (item.classList.contains("active")) {
        answer.style.maxHeight = 0;
        item.classList.remove("active");
        icon.textContent = "add";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        item.classList.add("active");
        icon.textContent = "remove";
      }
    });
  });

  // keep height correct if window is resized while open
  window.addEventListener("resize", () => {
    items.forEach((item) => {
      if (item.classList.contains("active")) {
        const ans = item.querySelector(".answer");
        ans.style.maxHeight = ans.scrollHeight + "px";
      }
    });
  });
});

// Mobile Accordion
function toggleAccordion(header) {
  const accordionItem = header.parentElement;
  const isActive = accordionItem.classList.contains("active");

  // Close all accordion items
  document.querySelectorAll(".accordion-item").forEach((item) => {
    item.classList.remove("active");
  });

  // Toggle current item
  if (!isActive) {
    accordionItem.classList.add("active");
  }
}

// Close accordion when clicking outside
document.addEventListener("click", function (e) {
  if (!e.target.closest(".accordion-item")) {
    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.classList.remove("active");
    });
  }
});
