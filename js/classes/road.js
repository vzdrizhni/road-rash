class Road extends Phaser.GameObjects.Container {
  constructor(config) {
    super(config.scene);
    this.scene = config.scene;
    this.back = this.scene.add.image(0,0,'road');
    this.add(this.back);
    this.scene.add.existing(this);

    // this.back.displayWidth = game.config.width * 0.5;
    // this.back.scaleY = this.back.scaleX;
    Align.scaleToGameW(this.back, 0.5);

    this.setSize(this.back.displayWidth, game.config.height);

    this.lineGroup = this.scene.add.group();
  }
  makeLines() {
    this.vSpace = this.displayHeight / 10;

    for (let i = 0; i < 100; i++) {
      let line = this.scene.add.image(this.x, this.vSpace * i, 'line');
      this.lineGroup.add(line);
    }
  };
}