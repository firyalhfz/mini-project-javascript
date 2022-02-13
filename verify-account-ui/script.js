const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        // for move after type in first box, and move and move, add the index and save
        if(e.key >= 0 && e.key <=9) {
            codes[idx].value = ''
            setTimeout(() => codes[idx + 1].focus(), 10)
        } else if(e.key === 'Backspace') {
            // if delete than the index erase 1
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})