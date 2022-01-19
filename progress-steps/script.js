const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
// we have to use querySelectorAll because many circles
const circles = document.querySelectorAll('.circle')

// like index, so We're going to call this current active, which is going to represent whichever one is active, which will set to one by default.
let currentActive = 1

// when we click next, currentActive will increase
next.addEventListener('click', () => {
    currentActive++

    // if it gets to the end, it doesnt go past four, 
    // so if we click next again when already in 4, it will not go to 5, just stop there
    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

//when we click prev, currentActive will decrease
prev.addEventListener('click', () => {
    currentActive--

    //so if we click prev when the currentActive already 1, it will not go to 0, -1, just stop there
    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        // if index is less than currentActive we add the class active to circle, else remove the class active
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}