class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloaderScene' });
  }

  preload() {
    this.add.image(320, 240, 'background');
    this.add.image(300, 150, 'title');
  }
}

export default PreloaderScene;
