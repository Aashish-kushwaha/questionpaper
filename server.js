// server.js
const express = require('express');
const path = require('path');
const app = express();
const QuestionStore = require('./src/questionstore');
const QuestionPaperGenerator = require('./src/questionpapergenerator');

const questionStore = new QuestionStore('./data/data.json');
const questionPaperGenerator = new QuestionPaperGenerator(questionStore);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/generateQuestionPaper', (req, res) => {
    const totalMarks = 100;
    const difficultyDistribution = { Easy: 20, Medium: 50, Hard: 30 };
    const questionPaper = questionPaperGenerator.generateQuestionPaper(totalMarks, difficultyDistribution);
    res.json(questionPaper);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
