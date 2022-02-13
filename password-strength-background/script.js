const password = document.getElementById('password')
const background = document.getElementById('background')

// so if the password is 10 letters then the background will be not blur, the background will be blur or not depends on the how many password that we type
password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length
  // 20 is the value of blurValue from the style
  const blurValue = 20 - length * 2
  background.style.filter = `blur(${blurValue}px)`
})