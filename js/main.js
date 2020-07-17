let game;

window.onload = () => {
  let config = {
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    parent: "phaser-game",
    scene: [SceneMain],
  };
  game = new Phaser.Game(config);
};
