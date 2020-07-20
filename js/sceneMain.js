class SceneMain extends Phaser.Scene {
  constructor() {
      super('SceneMain');
  }
  preload()
  {
    this.load.image('road', './images/road.jpg');
    this.load.image('line', './images/line.png');
    this.load.image('barrier', './images/barrier.png');
    this.load.image('cone', './images/cone.png');
    this.load.image('pcar1', './images/pcar1.png');
    this.load.image('pcar2', './images/pcar2.png');
    this.load.spritesheet('cars', './images/cars.png', {frameWidth: 60, frameHeight: 126});

  }
  create() {
    this.road = new Road({scene: this});
    this.road.x = game.config.width / 2;
    this.road.makeLines();

    emitter = new Phaser.Events.EventEmitter();

    controller = new Controller();

    this.sb = new ScoreBox({scene: this});
    this.sb.x = game.config.width / 2;
    this.sb.y = 50;

    model.score = 100;
  }
  update() {
    this.road.moveLines();
    this.road.moveObject();
  }
}