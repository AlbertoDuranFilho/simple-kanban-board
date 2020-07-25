function log (message){
    console.log('>' + message)
}


const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})


function dragstart(){
    // log('CARD: Start dragginh ')
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

    this.classList.add('isdragging')
}

function drag(){
    // log('CARD: Is dragging ')
}

function dragend(){
    // log('CARD: Stop drag! ')
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
    // This is Card
    this.classList.remove('isdragging')
}
// Lugar onde irei soltar os cards

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter(){
    // log('DROPZONE: ENTER IN ZONE! ')
}

function dragover(){
    // log('DROPZONE: OVER ')
    // This is dropzone
    this.classList.add('over')

    //  Get dragging card
    const cardBeingDragged = document.querySelector('.isdragging')

    // This is dropzone
    this.appendChild(cardBeingDragged)
}

function dragleave(){
    // log('DROPZONE: LEAVE! ')
    this.classList.remove('over')
}

function drop(){
    // log('DROPZONE: DROP! ')
    this.classList.remove('over')
}