const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const deleteBtn = document.querySelector("#delete-btn")
const tabBtn = document.querySelector("#tab-btn")
const ulEl = document.querySelector("#ul-el")

let myLinks = []
const linksFromLocalStorage = JSON.parse( localStorage.getItem("myLinks") )

if (linksFromLocalStorage) {
    myLinks = linksFromLocalStorage
    render(myLinks)
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs) {
        myLinks.push(tabs[0].url)
        localStorage.setItem("myLinks", JSON.stringify(myLinks) )
        render(myLinks)
    })
})

function render(Links) {
    let listItems = ""
    if (Links.length > 0) {
        listItems += `<li>Saved Links:</li>`
        for (let i=0; i<Links.length; i++) {
            listItems += `
            <li>
                <a href="${Links[i]}" target="_blank">${Links[i]}</a>
            </li>
            `
        }
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLinks = []
    render(myLinks)
});

inputBtn.addEventListener("click", function() {
    if (inputEl.value !== "") {
        myLinks.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLinks", JSON.stringify(myLinks))
    }
    render(myLinks)
})