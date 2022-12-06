const quizForm = document.querySelector('.quiz-form');
const submitAnswer = document.querySelector('#submit');
const output = document.querySelector('#output');

const correctAnswer = ["90","right","1","Isosceles","60"];

submitAnswer.addEventListener('click', calculateScore);

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);

    for( let value of formResults.values() ){
        if( correctAnswer[index] === value ){
            score++;
           
        }
        index++;
    }
    output.innerText = "Your score is : " + score;
}