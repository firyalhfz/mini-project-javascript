const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

// when click open, the container will show navigation
open.addEventListener('click', () => container.classList.add('show-nav'))

// when click close, the container will close the nav
close.addEventListener('click', () => container.classList.remove('show-nav'))