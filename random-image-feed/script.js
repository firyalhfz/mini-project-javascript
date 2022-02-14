const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 5

// the row multiply by 3, put the image in this div, the image is from the getrandomsize function
for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}

// if we console it, we will get random number x random number
function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}

// if we console it, we will get number for about 301 - 310
function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}
