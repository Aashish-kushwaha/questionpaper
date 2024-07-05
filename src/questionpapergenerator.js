// src/questionPaperGenerator.js
class QuestionPaperGenerator {
  constructor(questionStore) {
    this.questionStore = questionStore;
  }

  generateQuestionPaper(totalMarks, difficultyDistribution) {
    const questionPaper = [];
    for (const difficulty in difficultyDistribution) {
      const percentage = difficultyDistribution[difficulty];
      const marks = (totalMarks * percentage) / 100;
      const questions = this.questionStore.getQuestionsByDifficulty(difficulty);
      this.shuffleArray(questions);
      const selectedQuestions = questions.slice(0, marks);
      questionPaper.push(...selectedQuestions);
    }
    return questionPaper;
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

module.exports = QuestionPaperGenerator;
