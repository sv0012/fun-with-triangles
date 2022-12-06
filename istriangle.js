const inputs = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const output = document.querySelector('#output');

isTriangleBtn.addEventListener('click',isTriangle)

function isTriangle(){
    let sum = 0;
    for (let i = 0; i < inputs.length; i++){
        sum += Number(inputs[i].value);
    }
    if(sum === 180){
        output.innerText = "Yay!, Its a Triangle!"
    }
    else{
        output.innerText = "The sum is " + sum +". Its not a Triangle!"; 
    }
}