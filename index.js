let lastScroll = window.scrollY;
const navUl = document.getElementById("nav-ul");
let navBgTimeout;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll < lastScroll && currentScroll !== 0) {
    // Scrolling up
    navUl.classList.add("nav-bg");
    navUl.classList.remove("fade-out");
    clearTimeout(navBgTimeout);
    navBgTimeout = setTimeout(() => {
      navUl.classList.add("fade-out");
      setTimeout(() => {
        navUl.classList.remove("nav-bg", "fade-out");
      }, 500); // match fade-out transition
    }, 1500); // Remove after 1.5 seconds
  } else {
    // Scrolling down
    navUl.classList.remove("nav-bg");
    navUl.classList.remove("fade-out");
    clearTimeout(navBgTimeout);
  }
  lastScroll = currentScroll;
});

//booking portal modal form
const openBtn = document.getElementById("open-booking");
const portal = document.getElementById("booking-portal");
const closeBtn = document.getElementById("close-booking");
const successMessage = document.getElementById("booking-success");
const bookingFormContainer = document.getElementById("booking-form-container");
const form = document.getElementById("booking-form");
if (openBtn && portal && closeBtn && form) {
  openBtn.addEventListener("click", function (e) {
    e.preventDefault();
    portal.classList.remove("hidden");
    portal.classList.add("flex");
  });
  closeBtn.addEventListener("click", function () {
    portal.classList.add("hidden");
  });
  portal.addEventListener("click", function (e) {
    if (e.target === portal) portal.classList.add("hidden");
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    bookingFormContainer.classList.add("hidden");
    successMessage.classList.replace("hidden", "flex");
    form.reset();
  });
}
