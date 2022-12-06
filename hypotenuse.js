const sides = document.querySelectorAll('.side-input');
const btn = document.querySelector('#hypotenuse-btn')
const output = document.querySelector('#output');

function sumOfSquares(a, b) {
    const sum = a*a + b*b;
    return sum;
}
function calculateHypotenuse() {
    const sum = sumOfSquares(Number(sides[0].value),Number(sides[1].value));
    const hypotenuse = Math.sqrt(sum);

    output.innerText = " The length of the hypotenuse is " + hypotenuse;

}

btn.addEventListener('click',calculateHypotenuse);