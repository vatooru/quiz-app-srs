# Диаграммы поведения системы (Викторина)

## Use Case Диаграмма
Описание основных сценариев использования приложения "Викторина".

### Акторы:
- **Пользователь (Игрок)** — проходит викторину, просматривает результаты.
- **Администратор** — управляет базой вопросов и просматривает статистику.

### Основные Use Cases:
- Прохождение викторины (включает проверку ответов).
- Управление вопросами (добавление, редактирование, удаление).
- Просмотр статистики и результатов.

![Use Case Диаграмма](https://github.com/vatooru/quiz-app-srs/blob/feature/behavior-diagrams/docs/use_case/use_case_diagram.png.png?raw=true)

## Диаграммы последовательности

### 1. Прохождение викторины (Ответ на вопрос)
Показывает процесс проверки ответа пользователя и начисления баллов.
![Sequence 1](https://github.com/vatooru/quiz-app-srs/blob/feature/behavior-diagrams/docs/behavior/sequence/take_quiz_sequence.png?raw=true)

### 2. Добавление нового вопроса
Демонстрирует процесс создания вопроса администратором с валидацией данных.
![Sequence 2](https://github.com/vatooru/quiz-app-srs/blob/feature/behavior-diagrams/docs/behavior/sequence/add_question_sequence.png?raw=true)

### 3. Просмотр итоговых результатов
Отображает механизм подсчета итогового балла после завершения викторины.
![Sequence 3](https://github.com/vatooru/quiz-app-srs/blob/feature/behavior-diagrams/docs/behavior/sequence/view_results_sequence.png?raw=true)

## Используемые инструменты
- **PlantUML** — для кодового представления диаграмм (файлы `.puml` в репозитории).
- **PlantText / PlantUML Web Server** — для генерации изображений PNG.
