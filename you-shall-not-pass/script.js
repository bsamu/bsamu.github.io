
const buttonSelect = document.getElementById("button1");
var width1 = 0;
var height1 = 0;

function smth () {
    console.log(height1);
    console.log(width1);
    buttonSelect.style.setProperty('margin-left', `${width1}vw`);
    buttonSelect.style.setProperty('margin-top', `${height1}vh`);
}

function calculate1() {
    width1 = Math.floor(Math.random() * 89);
    height1 = Math.floor(Math.random() * 49);
    return smth();
}

buttonSelect.addEventListener("mouseover", calculate1);