import Cinematic from './script.js';

export default class StudioTitle extends Phaser.Scene {
    constructor() {
      super('StudioTitle');
    }
  
    preload() {
      this.load.image('StudioTitle', 'assets/studio.png');
      this.load.image('littleDude', 'assets/walking/littleDude.png');
    }

    init() {
        //this.cameras.main.setAlpha(0);
    }
  
    create() {
        this.cameras.main.fadeIn(2000);

        this.StudioTitle = this.add.image(800, 400, 'StudioTitle');
        this.StudioTitle.setTint(0xffaa00);
        let startColor = 0xffaa00; // yellow-orange
        let endColor = 0xff0000; // red

        this.littleDude = this.add.image(1300,610, 'littleDude').setScale(0.7);
        this.littleDude.setAlpha(0);

        
        let tween = this.tweens.add({
            targets: this.StudioTitle,
            tintTopLeft: startColor,
            tintTopRight: startColor,
            tintBottomLeft: startColor,
            tintBottomRight: startColor,
            duration: 3000,
            delay: 0,
            onUpdate: ()=> { // red
                let progress = tween.progress;
                let r = Phaser.Math.Interpolation.Linear([startColor >> 16 & 0xff, endColor >> 16 & 0xff], progress) << 16;
                let g = Phaser.Math.Interpolation.Linear([startColor >> 8 & 0xff, endColor >> 8 & 0xff], progress) << 8;
                let b = Phaser.Math.Interpolation.Linear([startColor & 0xff, endColor & 0xff], progress);
                this.StudioTitle.setTint(r + g + b);
            },
            onComplete: ()=>{ // orange
                startColor = 0xff0000;
                endColor = 0xffaa00;
                tween = this.tweens.add({
                    targets: this.StudioTitle,
                    tintTopLeft: startColor,
                    tintTopRight: startColor,
                    tintBottomLeft: startColor,
                    tintBottomRight: startColor,
                    duration: 2000,
                    onUpdate: ()=> {
                        let progress = tween.progress;
                        let r = Phaser.Math.Interpolation.Linear([startColor >> 16 & 0xff, endColor >> 16 & 0xff], progress) << 16;
                        let g = Phaser.Math.Interpolation.Linear([startColor >> 8 & 0xff, endColor >> 8 & 0xff], progress) << 8;
                        let b = Phaser.Math.Interpolation.Linear([startColor & 0xff, endColor & 0xff], progress);
                        this.StudioTitle.setTint(r + g + b);
                    },
                    onComplete: ()=>{ // white
                        startColor = 0xffaa00;
                        endColor = 0xffffff;
                        tween = this.tweens.add({
                            targets: this.StudioTitle,
                            tintTopLeft: startColor,
                            tintTopRight: startColor,
                            tintBottomLeft: startColor,
                            tintBottomRight: startColor,
                            duration: 2000,
                            onUpdate: ()=> {
                                let progress = tween.progress;
                                let r = Phaser.Math.Interpolation.Linear([startColor >> 16 & 0xff, endColor >> 16 & 0xff], progress) << 16;
                                let g = Phaser.Math.Interpolation.Linear([startColor >> 8 & 0xff, endColor >> 8 & 0xff], progress) << 8;
                                let b = Phaser.Math.Interpolation.Linear([startColor & 0xff, endColor & 0xff], progress);
                                this.StudioTitle.setTint(r + g + b);
                            },
                            onComplete: ()=> {
                                this.cameras.main.fadeOut(1000);
                                //clearInterval(this.myInterval);
                                setTimeout(()=>{
                                    this.time.removeAllEvents()
                                    this.scene.stop();
                                    this.scene.start('GameScreen');
                                },1000);
                            }
                        });
                        this.tweens.add({
                            targets: this.littleDude,
                            alpha: 1,
                            ease: 'linear',
                            duration: 1000,
                            delay: 1000
                        });
                    }
                });
            }
        });

    }


  
    update() {

    }
  }
