// queryselectorall does is allows us to select anything, could be a paraghraph, a class, an id
// and this is array, we call all of the panel that exist in html
const panels = document.querySelectorAll(".panel");

// we can call the array using this
// console.log(panels[0])

//so we use foreach to call the array
// and we want to do something when we click so we choose addEventListener("click")
//and when we click, will be appear the planel that active
//but before we call the active class, we have to remove the active class before, so just 1 active class that will be appear
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

//use looping to call the array and remove the active class
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
