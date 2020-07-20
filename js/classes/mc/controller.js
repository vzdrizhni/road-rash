class Controller {
  constructor() {
    emitter.on(G.SET_SCORE, this.setScore);
    emitter.on(G.UP_POINTS, this.upPoints)
  }

  setScore(score) {
    model.score = score;
  }

  upPoints(points) {
    let score = model.score;
    score += points;
    model.score = score;
  }
}