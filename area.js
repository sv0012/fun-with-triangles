const sides = document.querySelectorAll('.side-input');
const btn = document.querySelector('#area-btn')
const output = document.querySelector('#output');

btn.addEventListener('click',calculateArea);

function calculateArea(){
    const area = 1/2 * Number(sides[0].value) * Number(sides[1].value);

    output.innerText = "Area of the triangle: " + area +" square centimeters";
}