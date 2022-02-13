const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

// initial 2 sec movement
let interval = setInterval(run, 2000)

// change image and add the index
function run() {
    idx++
    changeImage()
}

// if index is more than the lenght of 
function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    // the image will be move alone, move 500px as the length of the image and carousel
    imgs.style.transform = `translateX(${-idx * 500}px)`
}

// we have to reset the interval, we call this function on below (rightbtn.addeventlis, and leftbtn) so that if we click button next or previous it will not move by itself and crushing
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})