let game;
let model;
let emitter;
let G;
let controller;

window.onload = () => {
  var isMobile = navigator.userAgent.indexOf("Mobile");
  if (isMobile == -1) {
    isMobile = navigator.userAgent.indexOf("Tablet");
  }
  if (isMobile == -1) {
    var config = {
      type: Phaser.AUTO,
      width: 480,
      height: 640,
      parent: "phaser-game",
      scene: [SceneMain],
    };
  } else {
    var config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      parent: "phaser-game",
      scene: [SceneMain],
    };
  }
  G = new Constants();
  model = new Model();
  model.isMobile=isMobile;
  game = new Phaser.Game(config);
};
