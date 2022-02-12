const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

// when we click one of the toogle then run the doTheTrick
toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

// if they are checked then
function doTheTrick(theClickedOne) {
    if(good.checked && cheap.checked && fast.checked) {
        // if good one that clicked than make the fast unchecked
        if(good === theClickedOne) {
            fast.checked = false
        }

        // if cheap one that clicked than make the good unchecked
        if(cheap === theClickedOne) {
            good.checked = false
        }

        // if fast one that clicked than make the cheap unchecked
        if(fast === theClickedOne) {
            cheap.checked = false
        }
    }
}