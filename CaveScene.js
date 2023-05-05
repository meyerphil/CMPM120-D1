import Cinematic from './script.js';

export default class CaveScene extends Phaser.Scene {
    constructor() {
      super('CaveScene');
    }
  
    preload() {
      this.load.image('1', 'assets/walking/1.png');
      this.load.image('2', 'assets/walking/2.png');
      this.load.image('3', 'assets/walking/3.png');
      this.load.image('4', 'assets/walking/4.png');
      this.load.image('5', 'assets/walking/5.png');
      this.load.image('6', 'assets/walking/6.png');
      this.load.image('7', 'assets/walking/7.png');
      this.load.image('8', 'assets/walking/8.png');
      this.load.image('9', 'assets/walking/9.png');
      this.load.image('vignette', 'assets/walking/vignette.png');
      this.load.audio('FireSound', 'assets/Fire.wav');
      this.load.audio('DrumSound', 'assets/Drum.wav');
    }
  
    create() {
        // if (!this.scene.get('Cinematic')) {
        // this.scene.add('Cinematic', Cinematic);
        // }
        // camera
        //this.cameras.main.setBounds(-50, -200, gameWidth * 2, gameHeight*1.6);
        // sound
        let FireSound = this.sound.add('FireSound');
        let DrumSound = this.sound.add('DrumSound');

        this.add.rectangle(0,0,1600,900,0x552211).setOrigin(0,0);
        
        this.faces = [];
        for(let i = 9; i > 0; i--){
            this.faces.push(this.add.image(800, -500, i.toString()));
        }

        for(let i = 0; i < 9; i++){
            this.faces[i].displayWidth = 1600;
            this.faces[i].displayHeight = this.faces[i].height * (this.faces[i].displayWidth / this.faces[i].width);
            this.faces[i].setAlpha(0);
        }

        let fireGroup = this.add.group();

        let wood1 = this.add.rectangle(800, -700, 500,125, 0x52361b);
        wood1.setAngle(-15);
        let wood2 = this.add.rectangle(800, -700, 500,125, 0x52361b);
        wood2.setAngle(15);
        let fireR = this.add.triangle(800, -500, 0, 0, 400, 0, 200, -400, 0xff0000);
        let fireY = this.add.triangle(800, -500, 5, -25, 350, -25, 175, -400, 0xffff00);

        fireGroup.add(wood1);
        fireGroup.add(wood2);
        fireGroup.add(fireR);
        fireGroup.add(fireY);
        FireSound.play();

        let tween = this.tweens.add({
            targets: fireGroup.getChildren(),
            y: '+=1200',
            ease: 'power2',
            duration: 3000,
            delay: 500,
            onComplete: ()=> {
                this.tweens.add({
                    targets: fireGroup.getChildren(),
                    y: '+=1200',
                    ease: 'linear',
                    duration: 3000,
                    delay: 500,
                });
                DrumSound.play();
                this.faces[8].setAlpha(1);
                this.tweens.add({
                    targets: this.faces,
                    y: '+=1000',
                    ease: 'power2',
                    duration: 3000,
                    delay: 500,
                    onComplete: ()=> {

                        for(let i = 8; i > 0; i--){
                            setTimeout(() => {
                                this.tweens.add({
                                    targets: this.faces[i],
                                    alpha: 0,
                                    duration: 700
                                });
                                this.tweens.add({
                                targets: this.faces[i-1],
                                alpha: 1,
                                duration: 700
                                });
                            }, (8 - i) * 700);
                        }

                        setTimeout(()=> {
                            this.cameras.main.fadeOut(1000);
                            //clearInterval(this.myInterval);
                            setTimeout(()=>{
                                this.time.removeAllEvents()
                                this.scene.stop();
                                this.scene.start('StudioTitle');
                            },1000);
                        }, 7000);
                    }
                });
            }
        });

        this.tweens.add({
            targets: fireY,
            angle: -2,
            ease: 'linear',
            duration: 1000,
            repeat: -1,
            yoyo: true
        });
        this.tweens.add({
            targets: fireR,
            angle: 2,
            ease: 'linear',
            duration: 1000,
            repeat: -1,
            yoyo: true
        });
        
        
        //this.fadeFace();
        this.vignette = this.add.image(800, 500, 'vignette');
        this.vignette.displayWidth = 1600;
        this.vignette.displayHeight = this.vignette.height * (this.vignette.displayWidth / this.vignette.width);
        this.tweens.add({
            targets: this.vignette,
            angle: 0.25,
            x:'+=5',
            ease: 'linear',
            duration: 1000,
            repeat: -1,
            yoyo: true
        });
        
    }


  
    update() {

    }
  }

