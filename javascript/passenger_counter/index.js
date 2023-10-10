let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;
// listen for clicks and increment `count` on click
//change the `count-el` in the HTML to reflect new count
function increment() {
    count++;
    countEl.textContent = count;
}

function save() {
    let countStr = count + ' - ';
    saveEl.textContent += countStr;
    // reset count
    count = 0;
    countEl.textContent = count;
}
