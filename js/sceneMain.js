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
    this.load.image('button1', './images/ui/buttons/1/1.png');
    this.load.spritesheet('cars', './images/cars.png', {frameWidth: 60, frameHeight: 126});

  }
  create() {
    emitter = new Phaser.Events.EventEmitter();
    console.log(emitter);

    controller = new Controller();

    this.sb = new ScoreBox({scene: this});
    this.sb.x = game.config.width -60;
    this.sb.y = 50;

    this.road = new Road({scene: this});
    this.road.x = game.config.width / 2;
    this.road.makeLines();

    let gridConfig = {rows: 5, cols: 5, scene: this};
    let alignGrid = new AlignGrid(gridConfig);
    alignGrid.show();
    alignGrid.showNumbers();

  }

  update() {
    this.road.moveLines();
    this.road.moveObject();
  }
}