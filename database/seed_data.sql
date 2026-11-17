INSERT INTO Users (username, email) VALUES 
('votooru', 'votooru@example.com'), 
('test_user', 'test@example.com');

INSERT INTO Categories (name, description) VALUES 
('История', 'Вопросы про исторические события'),
('Программирование', 'Вопросы про IT и код');

INSERT INTO Questions (category_id, question_text, difficulty) VALUES 
(1, 'В каком году началась Вторая мировая война?', 'medium'),
(2, 'Какой язык используется для стилизации веб-страниц?', 'easy');

INSERT INTO Answers (question_id, answer_text, is_correct) VALUES 
(1, '1914', 0),
(1, '1939', 1),
(1, '1941', 0),
(2, 'HTML', 0),
(2, 'Python', 0),
(2, 'CSS', 1);

INSERT INTO Quiz_Results (user_id, category_id, score, total_questions) VALUES 
(1, 1, 1, 1),
(1, 2, 1, 1);
