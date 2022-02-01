const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    // split make the word divided, e, m, a, i, l
    .split('')
    // this make the label text become wave
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    // join, nyatuin array
    .join('')
})