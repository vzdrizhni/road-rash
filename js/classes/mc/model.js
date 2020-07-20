class Model {
  constructor() {
    this.score = 0;
  }

  setScore(value) {
    this._score = value;
    emitter.emit(G.SCORE_UPDATED);
  }

  getScore() {
    return this._score;
  }
}
