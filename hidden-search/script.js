const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

// when we click the button, so the search will active (doing the style depends on css)
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})