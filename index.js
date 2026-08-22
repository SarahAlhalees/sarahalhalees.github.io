// Show the "back to top" button only after scrolling down a bit.
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.opacity = "1";
  } else {
    backToTop.style.opacity = "0";
  }
});

backToTop.style.opacity = "0";
backToTop.style.transition = "opacity 0.2s";
