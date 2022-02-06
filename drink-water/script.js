const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

// when small cups be clicked it make highlighted
smallCups.forEach((cup, idx) =>{
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx){
    // make the small cups if we click again become white, (decrease index)
    if(idx===7 && smallCups[idx].classList.contains('full')) idx--;
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    // make the small cups before also full, so if we click the 3rd small cup, so the 1st and the 2nd also full
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}

// update big cup
function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    // the total of small cup
    const totalCups = smallCups.length

    // if the full small cups is 0, so there will no persentage
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        // else, will be there persentage that background blue and also the text  how much percen
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    // if the small full cups is all, so the remained will be hidden
    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        // else, will be there is persentage and also the text how much liter again
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}