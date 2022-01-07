const openn = document.getElementById('open')
const closee = document.getElementById('close')
const coontainer = document.querySelector('container')

openn.addEventListener('click', () => coontainer.classList.add('show-nav'))

closee.addEventListener('click', () => coontainer.classList.remove('show-nav'))
