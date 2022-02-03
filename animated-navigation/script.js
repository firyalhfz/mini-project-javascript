const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

// when click the icon it will make the toggle add class active
toggle.addEventListener('click', () => nav.classList.toggle('active'))