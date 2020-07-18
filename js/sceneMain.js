class SceneMain extends Phaser.Scene {
  constructor() {
      super('SceneMain');
  }
  preload()
  {
    this.load.image('road', './images/road.jpg');
    this.load.image('line', './images/line.png');
    this.load.spritesheet('cars', './images/cars.png', {frameWidth: 60, frameHeight: 126});
  }
  create() {
    let road = new Road({scene: this});
    road.x = game.config.width / 2;
    road.makeLines();
  }
  update() {}
}