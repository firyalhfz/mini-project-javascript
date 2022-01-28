// queryselectorall mean it is more than one and will be array
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

// innerheight is the height of the inner web
function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4

  boxes.forEach(box => {
    // So this method returns with what's called the Dom ract object, and it's just basically a rectangle described as the size and position of a rectangle.
    // So it returns that providing information about the size of an element and its position relative to the viewport.
    // we want to see where the top of that particular box is.
    const boxTop = box.getBoundingClientRect().top;

    // so this code is for, if the box is inside the range, it will show using the style
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  })
}

// asjdfhasjkfn
// nfifnsadjk
// ndaskdnas
