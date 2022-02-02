/*
1. Bring in toggle buttons (querySelectorAll)
2. Loop Trough nodelist (forEach)
3. Add click event (addEventListener)
4. Toggle the active class on the parent node (.parentNode & classList.toggle)
*/

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
