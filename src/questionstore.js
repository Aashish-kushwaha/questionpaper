// src/questionStore.js
const fs = require('fs');

class QuestionStore {
  constructor(filePath) {
    this.filePath = filePath;
    this.questions = this.loadQuestions();
  }

  loadQuestions() {
    try {
      const data = fs.readFileSync(this.filePath);
      return JSON.parse(data);
    } catch (error) {
      console.error('Error loading questions:', error.message);
      return [];
    }
  }

  getQuestionsByDifficulty(difficulty) {
    return this.questions.filter(question => question.difficulty === difficulty);
  }
}

module.exports = QuestionStore;
