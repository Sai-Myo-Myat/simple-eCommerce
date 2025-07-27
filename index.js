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
