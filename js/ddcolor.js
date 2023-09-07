const colArray = ["red", "green", "yellow", "blue", "orange"]

const dropDown = document.getElementById("pbFillDropdown")
const ddColors = document.getElementById("ddColor")
let bdy = document.querySelector("body");


function fillDropdown(item) {
    console.log(item)
    const el = document.createElement("option")
    el.textContent = item
    ddColors.appendChild(el)
}

function addColors(btn) {
    ddColors.innerHTML = ""
    colArray.forEach(fillDropdown)
    console.log(document.all)
}

function setBackgroundColor(){
    const selindex = ddColors.selectedIndex
    const selectedColor = ddColor.options[selindex]
    const color = selectedColor.innerText
    bdy.style.backgroundColor = color
    console.log(selindex)
}

dropDown.addEventListener('click', addColors)

ddColors.addEventListener('change', setBackgroundColor)