import titleImage from '../assets/images/title1.png';
import backgroundImage from '../assets/images/background.png';
class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }
  preload() {
    this.load.image('title', titleImage);
    this.load.image('background', backgroundImage);
  }

  create() {
    this.scene.start('PreloaderScene');
  }
}

export default BootScene;
