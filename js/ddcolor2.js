const colArray2 = [["red","#ff0000"], ["green","#00ff00"], ["yellow","#ffff00"], ["purple","#1f35a9"]]
const colorObjects = [{"name": "red", "id": "#ff0000"}]
const ddColor2 = document.getElementById("ddColor2")
const pbFillDropdown2 = document.getElementById("pbFillDropdown2")

const bdy2 = document.querySelector("body")

function fillDropdown2(item) {
    const el = document.createElement("option")
    el.textContent = item
    ddColor2.appendChild(el)
}

function addColors2(btn) {
    ddColor2.innerHTML = ""
    colArray2.forEach(fillDropdown2)
    console.log(document.all)
}

function setBackgroundColor2() {
    const selindex = ddColor2.selectedIndex
    const selectedColor = ddColor2.options[selindex]
    const color = selectedColor.value
    bdy2.style.backgroundColor = color
    console.log(selindex)
}

pbFillDropdown2.addEventListener('click', addColors2)

ddColor2.addEventListener('change', setBackgroundColor2)