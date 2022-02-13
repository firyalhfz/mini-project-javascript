const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

// when one of the item clicked, hide all content and item, after that, the item that clicked and the index that clicked add the class of active and show
listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

// hide all content with remove the class show
function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}

// hide all list item with remove the class active
function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}