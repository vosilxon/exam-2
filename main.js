const savol = [
    { question: '4 + 4', answer: 8 },
    { question: '5 + 5', answer: 10 },
    { question: '9 * 9', answer: 81 },
    { question: '2 + 2', answer: 4 },
    { question: '3 + 1 + 5', answer: 9 },
    { question: '6 * 8', answer: 48 },
    { question: '5 * 2', answer: 10 },
    { question: '54 + 26', answer: 80 },
    { question: '70 - 19', answer: 51 },
    { question: '32 * 5', answer: 160 }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let totalQuestions = savol.length;

document.querySelector('#startButton').addEventListener('click', function() {
    document.querySelector('#startScreen').classList.add('hidden');
    document.querySelector('#gameScreen').classList.remove('hidden');
    showQuestion();
});

document.getElementById('submitAnswer').addEventListener('click', function() {
    const userAnswer = document.getElementById('answerInput').value;

    if (isNaN(userAnswer) || userAnswer.trim() === '') {
        alert("Son yoz, dabba!");
        return;
    }

    const correctAnswer = savol[currentQuestionIndex].answer;

    if (parseInt(userAnswer) === correctAnswer) {
        document.getElementById('resultText').textContent = "To'g'ri!";
        correctAnswers++;
    } else {
        document.getElementById('resultText').textContent = "Noto'g'ri, to'g'ri javob: " + correctAnswer;
    }

    // Очистить поле ответа и перейти к следующему вопросу после небольшой задержки
    setTimeout(function() {
        document.getElementById('answerInput').value = '';
        document.getElementById('resultText').textContent = '';
        currentQuestionIndex++;

        if (currentQuestionIndex === totalQuestions) {
            document.getElementById('questionText').textContent = `O'yin tugadi! Siz ${correctAnswers} to'g'ri javob berdingiz. Yana o'ynashni boshlash uchun "Start" tugmasini bosing.`;
            currentQuestionIndex = 0;
            correctAnswers = 0;
        } else {
            showQuestion();
        }
    }, 1000); // Пауза в 1 секунду перед переходом к следующему вопросу
});

function showQuestion() {
    document.getElementById('questionText').textContent = savol[currentQuestionIndex].question;
}