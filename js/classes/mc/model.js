class Model {
  constructor() {
    this._score = 0;
  }

  set score(value) {
    this._score = value;
    console.log("score updated!");
    emitter.emit(G.SCORE_UPDATED);
  }

  get score() {
    return this._score;
  }
}
