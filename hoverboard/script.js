const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500

// for make the square
for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    // if mouseover then set the color
    square.addEventListener('mouseover', () => setColor(square))

    // if mouseout then remove the color
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

// for set the color
function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

// remove the color
function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}

// get random color
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}