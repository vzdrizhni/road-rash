let game;
let model;
let emitter;
let G;
let controller;

window.onload = () => {
  let config = {
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    parent: "phaser-game",
    scene: [SceneMain],
  };
  G = new Constants();
  model = new Model();
  game = new Phaser.Game(config);
};
