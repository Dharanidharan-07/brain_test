document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
});

const quizQuestions = [ /* SAME QUESTIONS ARRAY FROM YOUR ORIGINAL CODE */ ];

let currentQuestion = 0;
let score = 0;
let selectedOptions = Array(quizQuestions.length).fill(null);
let timeElapsed = 0;
let timerInterval;

function displayQuiz() {
    const quizElement = document.getElementById('quiz');
    let quizContent = '';

    quizQuestions.forEach((question, index) => {
        quizContent += `<div class="question-container ${currentQuestion === index ? 'active' : 'hidden'}">
            <div class="question">${index + 1}. ${question.question}</div>
            <div class="options">`;

        question.options.forEach(option => {
            const checked = selectedOptions[index] === option ? 'checked' : '';
            quizContent += `
                <div class="option">
                    <input type="radio" id="q${index}-${option}" name="question${index}" value="${option}" ${checked} onchange="saveAnswer(${index}, '${option}')">
                    <label for="q${index}-${option}">${option}</label>
                </div>`;
        });

        quizContent += `</div></div>`;
    });

    quizElement.innerHTML = quizContent;
    document.getElementById('question-number').textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
    showQuestion(currentQuestion);
}

function showQuestion(index) {
    const questions = document.querySelectorAll('.question-container');
    questions.forEach((question, i) => {
        question.style.display = i === index ? 'block' : 'none';
    });
}

function saveAnswer(questionIndex, option) {
    selectedOptions[questionIndex] = option;
}

function nextQuestion() {
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        displayQuiz();
        updateProgressBar();
    }
}

function calculateScore() {
    score = 0;
    quizQuestions.forEach((question, index) => {
        if (selectedOptions[index] === question.answer) {
            score++;
        }
    });
    return score;
}

function show
