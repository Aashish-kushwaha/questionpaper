// index.js
const QuestionStore = require('./src/questionstore');
const QuestionPaperGenerator = require('./src/questionpapergenerator');

const questionStore = new QuestionStore('./data/data.json');
const questionPaperGenerator = new QuestionPaperGenerator(questionStore);

function generateQuestionPaper() {
    const totalMarks = 100;
    const difficultyDistribution = { Easy: 20, Medium: 50, Hard: 30 };
    const questionPaper = questionPaperGenerator.generateQuestionPaper(totalMarks, difficultyDistribution);

    displayQuestionPaper(questionPaper);
}

function displayQuestionPaper(questionPaper) {
    const outputDiv = document.getElementById('questionPaperOutput');
    outputDiv.innerHTML = '<h2>Generated Question Paper:</h2>';

    if (questionPaper.length === 0) {
        outputDiv.innerHTML += '<p>No questions available for the specified criteria.</p>';
    } else {
        questionPaper.forEach(question => {
            outputDiv.innerHTML += `<p>${question.question} (${question.difficulty}, ${question.marks} marks)</p>`;
        });
    }
}
