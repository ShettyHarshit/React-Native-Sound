export default class Question {
  static getAll() {
    return require("../data/questions.json").map(raw => new Question(raw));
  }

  constructor(params) {
    this.blah = params.blah;
    // this.answer = new Answer(params.answer)
  }

  setAnswer(answer) {}
  getAnswer() {}
  get isAnswered() {}
}
