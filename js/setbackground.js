let inp = document.querySelector(".inpColor");
console.log(inp);
let pbCol = document.querySelector(".pbSetColor");

console.log(pbCol);

const inpColorValue = document.querySelector(".inpColorValue")

pbCol.textContent = "Tryk mig for set color";

const pTags = document.getElementById('p')
console.log(pTags)

let bdy = document.querySelector("body");
console.log(bdy);

const inpColorValue1 = document.getElementById("inpColorValue1")

function setBackgroundColor() {
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor
}

function useColorPicker() {
    let col = inpColorValue1.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor
}


pbCol.addEventListener('click', setBackgroundColor);

document.addEventListener('keyup', setBackgroundColor)

inpColorValue1.addEventListener('input', useColorPicker)


