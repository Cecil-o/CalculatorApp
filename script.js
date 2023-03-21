
let boxTop = document.querySelector('#inputText');
let boxBottom = document.querySelector('#outputText');

function erase(){
    boxTop.innerHTML ="";
    boxBottom.innerHTML ="";
}

function clickMe(sum){
    boxTop.innerHTML += sum;
}
function calculate() {
    let context = boxTop.innerHTML;
    let calculate = eval(context);
    boxBottom.innerHTML = calculate;
}