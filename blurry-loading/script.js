const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

// nilai awal
let load = 0
// doing function blurring in every 30sec
let int = setInterval(blurring, 30)

// make load add one by one until 99
function blurring(){
    load++

    if(load > 99){
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    // this for the text
    // the opacity is 1 to 0 
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    // this for the background
    // the opacity is 30 to 0
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};