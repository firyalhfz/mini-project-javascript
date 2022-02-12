const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// for copy the password when we click clipboard
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    // if empty then return (doing nothing)
    if(!password) { return }

    // if the text area there is password then select all then copy, then remove the texarea, and will be show the alert
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
})

generateEl.addEventListener('click', () => {
    // check the value of length and if the lower/upper/number/symbol have checked or not
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    // masukan the result into resultEl
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    // the total of how many checkbox checked
    const typesCount = lower + upper + number + symbol
    // the total of how many checkbox checked then put to array
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    
    if(typesCount === 0) {
        return ''
    }

    // do the looping of the array
    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            // because of using this, will be result by => lower, upper, number, symbol
            const funcName = Object.keys(type)[0]
            // use the function of randomFunc and if lower then will be run getRandomLower ect
            generatedPassword += randomFunc[funcName]()
        })
    }

    // get the final password using this slice and how many length is it
    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

// get random lower case, 
// this function for get random that have keycode
// multipy by 26 because the alphabet is 26 
// + 97 because the keycode of lowercase is beginning from 97
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

// this function for get random that have keycode
// multipy by 26 because the alphabet is 26
// + 65 because the keycode of uppercase is beginning from 65
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// this function for get random that have keycode
// multipy by 10 because the number is 10 
// + 48 because the keycode of number is beginning from 48
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

// this function for get random symbol from string
// multipy by the lenght of the symbols
function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}