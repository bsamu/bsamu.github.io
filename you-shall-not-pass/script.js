
const buttonSelect = document.getElementById("button1");
var width1 = 0;
var height1 = 0;

function smth () {
    console.log(height1);
    console.log(width1);
    buttonSelect.style.setProperty('left', `${width1}px`);
    buttonSelect.style.setProperty('top', `${height1}px`);
    buttonSelect.style.setProperty('transform', 'none');
}

function calculate1() {
    const maxWidth = window.innerWidth-150;
    const maxHeight = window.innerHeight-150;
    width1 = Math.floor(Math.random() * maxWidth);
    height1 = Math.floor(Math.random() * maxHeight);
    return smth();
}

buttonSelect.addEventListener("mouseover", calculate1);