import tileimage from '../assets/map/forest_tileset-32x32.png';
import palatinimage from '../assets/images/paladin.png';
import warriorimage from '../assets/images/warrior2.png';
import wizardimage from '../assets/images/Wizard.png';
import batsprite from '../assets/images/bat-sprite.png';
import giantsprite from '../assets/images/giant-sprite.png';
import dinosprite from '../assets/images/dino-sprite.png';
import warriorprite from '../assets/images/warrior-sprite.png';
import mapjson from '../assets/map/dark_forest.json';

import wizardsprite from '../assets/images/wizard-sprite.png';
import paladinprite from '../assets/images/paladin-sprite.png';

class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloaderScene' });
  }

  preload() {
    this.add.image(320, 240, 'background');
    this.add.image(300, 150, 'title');
    this.load.image('tiles', tileimage);
    this.load.tilemapTiledJSON('map', mapjson);
    this.load.image('p1', palatinimage);
    this.load.image('p2', wizardimage);
    this.load.image('p3', warriorimage);
    this.load.spritesheet('warrior', warriorprite, {
      frameWidth: 183,
      frameHeight: 123,
    });
    this.load.spritesheet('wizard', wizardsprite, {
      frameHeight: 106,
      frameWidth: 160,
    });
    this.load.spritesheet('paladin', wizardsprite, {
      frameHeight: 249,
      frameWidth: 100,
    });
    this.load.spritesheet('dino', dinosprite, {
      frameHeight: 154,
      frameWidth: 118,
    });
    this.load.spritesheet('giant', giantsprite, {
      frameHeight: 385,
      frameWidth: 318,
    });
    this.load.spritesheet('bat', batsprite, {
      frameHeight: 121,
      frameWidth: 189,
    });

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const {width,height}=this.cameras.main;
    const loadingText=this.make.text({
        x=width/2,
        y=height/2-50,
        text:"Loading...",
        style:{
            font:"20px monospace",
            fill:"#ffffff"
        },
    })
    loadingText.setOrigin(0.5,0.5);

    const percentText=this.make.text({
        x:width/2,
        y:height/2-5,
        text:"0%",
        style:{
            font:"18px monospace",
            fill:'#ffffff'
        }
    })
    const assetText = this.make.text({
        x: width / 2,
        y: height / 2 + 50,
        text: '',
        style: {
          font: '18px monospace',
          fill: '#ffffff',
        },
      });
      assetText.setOrigin(0.5, 0.5);

      this.load.on('progress', (value) => {
        percentText.setText(`${+(value * 100 | 0)}%`);
        progressBar.clear();
        progressBar.fillStyle(0xffffff, 1);
        progressBar.fillRect(250, 280, 300 * value, 30);
      });
      this.load.on('fileprogress', (file) => {
        assetText.setText(`Loading asset: ${file.key}`);
      });

      this.load.on('complete', () => {
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
        percentText.destroy();
        assetText.destroy();
        this.run();
      });
  
    

  }
  run()
  {
      this.scene.start('UserScene');

  }
}

export default PreloaderScene;
