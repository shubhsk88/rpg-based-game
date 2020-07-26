import Phaser from 'phaser';
import PreloaderScene from './Scenes/PreloaderScene';
import BootScene from './Scenes/BootScene';

const bootScene = new BootScene();
const preloaderScene = new PreloaderScene();
const config = {
  type: Phaser.AUTO,
  parent: 'phaser-rpg',
  width: 640,
  height: 480,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
    },
  },
};

const game = new Phaser.Game(config);

game.scene.add('BootScene', bootScene);
game.scene.add('PreloaderScene', preloaderScene);

game.scene.start('BootScene');
