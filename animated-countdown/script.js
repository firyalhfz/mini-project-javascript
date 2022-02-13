const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

// reset the animation, hide the counter and show the final
function resetDOM() {
  counter.classList.remove('hide')
  finalMessage.classList.remove('show')

  nums.forEach((num) => {
    num.classList.value = ''
  })

  nums[0].classList.add('in')
}

// run the animation of number beginning from 0, use if else for checking condition, 
function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        // if already start using animation goin and there is no number next, so remove class in and add out
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        // if the animationname is goout and still there is next number then add classlist in on num
        // the next number will be appear with animation
        num.nextElementSibling.classList.add('in')
      } else {
        // if finish counting then hide the counter and show the final message
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    })
  })
}

// if click replay run 2 function
replay.addEventListener('click', () => {
  resetDOM()
  runAnimation()
})