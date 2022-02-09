const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  // if the high of scroll is more than 150 then make the nav active if not remove

  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
