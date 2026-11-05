let currentQuestionIndex = 0;

function startQuiz() {
    if (questions.length === 0) {
        alert('Сначала добавьте вопросы!');
        return;
    }
    currentQuestionIndex = 0;
    document.getElementById('quizArea').style.display = 'block';
    document.getElementById('resultMessage').innerText = '';
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById('currentQuestion').innerText = questions[currentQuestionIndex].question;
        document.getElementById('userAnswer').value = '';
    } else {
        document.getElementById('currentQuestion').innerText = 'Викторина завершена!';
    }
}
