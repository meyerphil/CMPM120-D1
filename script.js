import CaveScene from './CaveScene.js';
import StudioTitle from './StudioTitle.js';
import GameScreen from './GameScreen.js';

export default class Cinematic extends Phaser.Scene {

    constructor() {
        super('Cinematic');
    }
    preload(){
        //this.load.image('monkey', 'assets/sectionimage.png');

    }
    create(){

        if (!this.scene.get('CaveScene')) {
            this.scene.add('CaveScene', CaveScene);
        }
        if (!this.scene.get('StudioTitle')) {
            this.scene.add('StudioTitle', StudioTitle);
        }
        if (!this.scene.get('GameScreen')) {
            this.scene.add('GameScreen', GameScreen);
        }
        this.scene.start('CaveScene');
        
        
        // this.scene.stop();
        // this.scene.start('CutScene');
    
        
    }
    
    update(){
        this.player.update();
    }
}


let config = {
    type: Phaser.WEBGL,
    width: 1600,
    height: 900,
    backgroundColor: 0x0,
    scene: [Cinematic],
}

let game = new Phaser.Game(config);

