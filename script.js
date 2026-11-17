let questions = [];
let currentQuestionIndex = 0;
let score = 0;

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

function startQuiz() {
    if (questions.length === 0) {
        alert('Сначала добавьте вопросы!');
        return;
    }
    
    currentQuestionIndex = 0;
    score = 0;
    
    document.getElementById('quizArea').style.display = 'block';
    document.getElementById('resultMessage').innerText = '';
    document.getElementById('finalScore').innerText = '';
  
    document.getElementById('userAnswer').style.display = 'inline-block';
    document.getElementById('submitAnswerBtn').style.display = 'inline-block';
    
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById('currentQuestion').innerText = `Вопрос ${currentQuestionIndex + 1} из ${questions.length}: ` + questions[currentQuestionIndex].question;
        document.getElementById('userAnswer').value = '';
        document.getElementById('userAnswer').focus();
    } else {
        document.getElementById('currentQuestion').innerText = 'Викторина завершена!';
        document.getElementById('userAnswer').style.display = 'none';
        document.getElementById('submitAnswerBtn').style.display = 'none';
        document.getElementById('finalScore').innerText = `Ваш результат: ${score} из ${questions.length} правильных ответов!`;
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById('userAnswer').value.trim();
    if (!userAnswer) {
        alert('Введите ответ!');
        return;
    }
    
    const correctAnswer = questions[currentQuestionIndex].answer;

    document.getElementById('submitAnswerBtn').disabled = true;
    document.getElementById('userAnswer').disabled = true;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('resultMessage').style.color = 'green';
        document.getElementById('resultMessage').innerText = '✅ Правильно!';
        score++;
    } else {
        document.getElementById('resultMessage').style.color = 'red';
        document.getElementById('resultMessage').innerText = `❌ Неправильно. Правильный ответ: ${correctAnswer}`;
    }

    currentQuestionIndex++;

    setTimeout(() => {
        document.getElementById('resultMessage').innerText = '';
        document.getElementById('submitAnswerBtn').disabled = false;
        document.getElementById('userAnswer').disabled = false;
        showQuestion();
    }, 2000);
}
