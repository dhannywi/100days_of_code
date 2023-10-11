// HTML elements
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")

let hasBlackJack = false
let isAlive = false
let cards = []
let message = ""
let player = {
    name : "Dhanny",
    chips : 145
}

// Function generates random numbers
function getRandomCard(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min
}

function startGame() {
    if (isAlive === false || hasBlackJack === true) {
        isAlive = true
        cards = []
        cards.push(getRandomCard(2, 11))
        cards.push(getRandomCard(2, 11))
        renderGame()
    }
}

function renderGame() {
    let sum = 0;
    cardsEl.textContent = "Cards: "
    for (let i=0; i<cards.length; i++) {
        sum += cards[i]
        cardsEl.textContent += cards[i] + ' - '
    }
    sumEl.textContent = `Sum: ${sum}`
    // Conditions
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    playerEl.textContent = player.name + ": $" + player.chips
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        cards.push(getRandomCard(2, 11))
        renderGame()
}
}

// Winner CASH OUT