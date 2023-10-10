let countEl = document.getElementById("count-el")
let count = 0;
// listen for clicks and increment `count` on click
//change the `count-el` in the HTML to reflect new count
function increment() {
    count++;
    countEl.innerText = count;
}

function save() {
    console.log(count);
}