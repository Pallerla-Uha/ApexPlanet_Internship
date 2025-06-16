// script.js

// Lazy load images
document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll(".lazy");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => {
    observer.observe(img);
  });
});

// Optional: Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// script.js

function redirectToPayment() {
  window.location.href = "payment.html";
}

// Handle payment form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("paymentForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // prevent actual form submission
      alert("Payment successful! Thank you for your purchase.");
      window.location.href = "index.html"; // optional: redirect to home after payment
    });
  }
});

