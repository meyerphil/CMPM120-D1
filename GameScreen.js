import Cinematic from './script.js';

export default class GameScreen extends Phaser.Scene {
    constructor() {
      super('GameScreen');
    }
  
    preload() {
        this.load.image('Art', 'assets/IMG_0380.jpg');
    }

    init() {
        //this.cameras.main.setAlpha(0);
    }
  
    create() {
        this.cameras.main.fadeIn(2000);

        this.Art = this.add.image(800, 600, 'Art');
        this.Art.displayWidth = 1600;
        this.Art.displayHeight = this.Art.height * (this.Art.displayWidth / this.Art.width);

        let text = this.add.text(100, 300, '_Play_ Options Credits Quit', {
            fontFamily: 'Times New Roman',
            fontSize: 48,
            color: '#000000',
            align: "left",
            wordWrap: { width: 200, useAdvancedWrap: true},
            lineSpacing: 50,
        });

        let title = this.add.text(100, 50, 'The Fantastic Escape From The Wild', {
            fontFamily: 'Times New Roman',
            fontSize: 55,
            color: '#000000',
            align: "left",
            wordWrap: { width: 500, useAdvancedWrap: true},
            lineSpacing: 20,
        });
    }


  
    update() {

    }
  }
