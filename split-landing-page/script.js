// inisialisasi
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

// so, if the mouseenter the left side, we will add class hover-left, its mean the hover-left will be applied, and conversly
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

// so, if the mouseenter the right side, we will add class hover-right, its mean the hover-right will be applied, and conversly
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))