const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        // getAtribute from data-target
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        // this for the speed of change number
        const increment = target / 20

        if(c < target) {
            // this make the number add 
            counter.innerText = `${Math.ceil(c + increment)}`;
            // this make updateCounter slowly
            setTimeout(updateCounter, 1)
        }else{
            counter.innerText = target
        }
    }

    updateCounter() 
})