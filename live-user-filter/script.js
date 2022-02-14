const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

// fetch the data using async and await
async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''

    // use foreach for putting the api to list
    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        // call the api of picture, name, location, one by one         
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    })
}

// filter the data use seacrhterm, searchterm is if we check on console, it will show what we write (tercatat)
function filterData(searchTerm) {
    listItems.forEach(item => {
        // if the searchtext is match with one of user/location so we remove the class of hide and if not match with anything then hide       
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}
