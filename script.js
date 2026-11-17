let questions = [];

function addQuestion() {
    const questionText = document.getElementById('questionInput').value.trim();
    const answerText = document.getElementById('answerInput').value.trim();

    if (!questionText || !answerText) {
        alert('Заполните вопрос и ответ!');
        return;
    }

    questions.push({ question: questionText, answer: answerText });
    alert('Вопрос добавлен!');
    
    document.getElementById('questionInput').value = '';
    document.getElementById('answerInput').value = '';
}
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
        document.getElementById('userAnswer').style.display = 'none';
        document.querySelector('button[onclick="checkAnswer()"]').style.display = 'none';
    }
}
function checkAnswer() {
    const userAnswer = document.getElementById('userAnswer').value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('resultMessage').style.color = 'green';
        document.getElementById('resultMessage').innerText = '✅ Правильно!';
    } else {
        document.getElementById('resultMessage').style.color = 'red';
        document.getElementById('resultMessage').innerText = `❌ Неправильно. Правильный ответ: ${correctAnswer}`;
    }

    currentQuestionIndex++;
    setTimeout(showQuestion, 2000); 
}
