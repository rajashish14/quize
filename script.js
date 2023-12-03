const questions = [
    {
        question: "What is the capital city of France?",
        answers: [
            {text: "Berlin", correct: false },
            {text: "Paris", correct: true },
            {text: "Madrid", correct: false },
            {text: "Rome", correct: false },
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            {text: "1905", correct: false },
            {text: "1912", correct: true },
            {text: "1920", correct: false },
            {text: "1931", correct: false },
        ]
    },
    {
        question: " What is the largest planet in our solar system?",
        answers: [
            {text: "Earth", correct: false },
            {text: "Jupiter", correct: true },
            {text: "Mars", correct: false },
            {text: "Venus", correct: false },
        ]
    },
    {
        question: "Who wrote the play Romeo and Juliet?",
        answers: [
            {text: "William Shakespeare", correct: true },
            {text: "Jane Austen", correct: false },
            {text: "Charles Dickens", correct: false },
            {text: "Mark Twain", correct: false },
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            {text: "Au", correct: true },
            {text: "Ag", correct: false },
            {text: "Fe", correct: false },
            {text: "Cu", correct: false },
        ]
    },

];
const questionAll = document.querySelector(".que");
const optionAll = document.querySelectorAll(".submit");
const nextButton = document.querySelector(".nextbutton");
let currentqueIndex = 0;
let score = 0;
// function startQuiz(){
//     currentqueIndex = 0;
//     score = 0;
//     showQuestion();
// }
function showQuestion() {
    const currentQuestion = questions[currentqueIndex];
    let questionNumb = currentqueIndex + 1;
    questionAll.textContent = questionNumb +". " + currentQuestion.question;
     
    const optionAll = document.querySelectorAll(".submit");
    
    optionAll.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index].text;
        button.onclick = function() {
            checkAnswer(index);
        };
    });

    nextButton.style.display = 'none';
}
function checkAnswer(index) {
    const currentQuestion = questions[currentqueIndex];
    const selectedAnswer = currentQuestion.answers[index];
    optionAll[index].style.Color = 'white';

    if (selectedAnswer.correct) {
        optionAll[index].style.backgroundColor = 'green';
        score++;
    } else {
        optionAll[index].style.backgroundColor = 'red';
        const correctIndex = currentQuestion.answers.findIndex(answer => answer.correct);
        optionAll[correctIndex].style.backgroundColor = 'green';
    }

    optionAll.forEach(button => {
        button.disabled = true;
    });
    nextButton.style.display = 'block';

    nextButton.disabled = false;
}

nextButton.onclick = function() {
    currentqueIndex++;
    if (currentqueIndex < questions.length) {
        showQuestion();
        optionAll.forEach(button => {
            button.disabled = false;
            button.style.backgroundColor = '';
        });
        nextButton.disabled = true;
    } else {
        alert(`Quiz finished! Your score is: ${score} out of ${questions.length}`);
    }
};

showQuestion();
nextButton.disabled = true;



    



