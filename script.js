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
