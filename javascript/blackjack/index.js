// Function generates random numbers
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let hasBlackJack = false;
let isAlive = true;
let firstCard = getRndInteger(2, 11);
let secondCard = getRndInteger(2, 11);
let cards = [firstCard, secondCard];
let cardsEl = document.querySelector("#cards-el");

let sumEl = document.querySelector("#sum-el");
let sum = firstCard + secondCard;

let messageEl = document.getElementById("message-el");
let message = "";

function startGame() {
    renderGame()
    cardsEl.textContent = `Cards: ${cards[0]} - ${cards[1]}`
    sumEl.textContent = `Sum: ${sum}`;
}

function renderGame() {
    // Conditions
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    cards.push(getRndInteger(2, 11));
    sum += newCard;
    renderGame()
    cardsEl.textContent = `Cards: ${firstCard} - ${secondCard} - ${newCard}`
    sumEl.textContent = `Sum: ${sum}`;
}

// Winner CASH OUT