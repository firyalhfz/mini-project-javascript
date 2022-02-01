const jokee = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

// so every click button, will generateJoke
jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// using asyncronous
// async and await is must!
async function generateJoke(){
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokee.innerHTML = data.joke
}