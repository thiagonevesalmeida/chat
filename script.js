function sendMessage(str) {
    let newMessage = document.createElement('div')
    newMessage.classList.add('message', 'user')
    newMessage.innerHTML += `
        <div class="top">Você - ${timeUpdate()}</div>
        <p class="body">${str}</p>
        `
    return newMessage
}

function timeUpdate() {
    const date = new Date()
    let minute = date.getMinutes() < 10? `0${date.getMinutes()}`: date.getMinutes()

    const fullTime = `${date.getHours()}:${minute}`
    return fullTime
}

function dayUpdate() {
    const date = new Date()
    const day = date.getDay()

    switch(day) {
        case 0:
            return 'Domingo'
            break;
        case 1:
            return 'Segunda-feira'
            break;
        case 2:
            return 'Terça-feira'
            break;
        case 3:
            return 'Quarta-feira'
            break;
        case 4:
            return 'Quinta-feira'
            break;
        case 5:
            return 'Sext-feira'
            break;
        case 6:
            return 'Sábado'
            break;
    }
}

// Date-Time update
document.querySelector('.last-view').textContent = `${dayUpdate()} ${timeUpdate()}`
document.querySelectorAll('.top').forEach(element => element.textContent += `${timeUpdate()}`)

// scroll last message
const messages = document.querySelector('.messages')
messages.lastElementChild.scrollIntoView(); 

// New message
const messageBox = document.querySelector('form')
let totalMessages = 0

messageBox.addEventListener('submit', function(event) {
    event.preventDefault();

    let userMessage = document.querySelector('input')

    if(userMessage.value) {
        if (totalMessages === 0) {
            messages.insertBefore(sendMessage(userMessage.value), messages.lastElementChild)
        } else { //normal flow
            messages.appendChild(sendMessage(userMessage.value))
        }
    }

    messages.lastElementChild.scrollIntoView();
    messages.querySelector('#message2').style.display = 'block'

    userMessage.value = '';
    totalMessages++
})