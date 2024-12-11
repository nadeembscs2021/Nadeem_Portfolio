// Sticky Navbar on Scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 50);
});

// Typing Text Animations (Using Typed.js)
document.addEventListener("DOMContentLoaded", function () {
  new Typed(".typing", {
    strings: ["Programmer", "Developer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

// Toggle Navigation Menu for Mobile
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
});
//

// Smooth Scrolling for Navigation Links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 50,
      behavior: "smooth",
    });

    // Close menu on mobile after clicking
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});

// Fade-in Animation on Scroll
const faders = document.querySelectorAll(".reveal");

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -100px 0px",
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

// Scroll-to-top button functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.classList.add("active");
  } else {
    scrollToTopBtn.classList.remove("active");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//  Contact Form :

// Initialize EmailJS with your User ID
(function () {
  emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((el) => (el.style.display = "none"));

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    let isValid = true;

    // Validation checks
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required";
      document.getElementById("nameError").style.display = "block";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Valid email is required";
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    }

    const phonePattern = /^[\d\s+()-]{7,15}$/;
    if (phone === "" || !phonePattern.test(phone)) {
      document.getElementById("phoneError").textContent =
        "Valid phone number is required";
      document.getElementById("phoneError").style.display = "block";
      isValid = false;
    }

    if (message === "") {
      document.getElementById("messageError").textContent =
        "Message is required";
      document.getElementById("messageError").style.display = "block";
      isValid = false;
    }

    // If validation passes, send the form data
    if (isValid) {
      emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
          name: name,
          email: email,
          phone: phone,
          message: message,
        })
        .then(
          function (response) {
            alert("Message sent successfully!");
          },
          function (error) {
            alert("There was an error sending the message.");
          }
        );
    }
  });

// Completed:
