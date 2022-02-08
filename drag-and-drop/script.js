const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

// when start to drag
function dragStart() {
    this.className += ' hold' 
    setTimeout(() => this.className = 'invisible', 0)
}

// when finish drag
function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()
}

// when the image enter one of the box
function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

// when the image leave one of the box
function dragLeave() {
    this.className = 'empty'
}

// when the image dropped
function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}