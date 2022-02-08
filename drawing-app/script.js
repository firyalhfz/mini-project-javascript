const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
let x
let y

// make the position where is we click on canvas
canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

// so when we not clicking the canvas it will not find the position
document.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        // this for find the position when our mouse clicked and move
        const x2 = e.offsetX
        const y2 = e.offsetY

        // call the function draw circle and depends the position
        drawCircle(x2, y2)
        // call the function drawline and depends the position
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

// this for the beginning, the cuas is circle
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

// this for make line
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

// this for update the text size on tools
function updateSizeOnScreen() {
    sizeEL.innerText = size
}

// for increade the size of kuas
increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

// for decreare the size of kuas
decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

// for change the color
colorEl.addEventListener('change', (e) => color = e.target.value)

// for clear the canvas or delete
clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))