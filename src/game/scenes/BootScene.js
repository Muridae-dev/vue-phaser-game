import { Scene } from 'phaser'
/*import sky from '@/game/assets/sky.png'
import bomb from '@/game/assets/bomb.png'
import thudMp3 from '@/game/assets/thud.mp3'
import thudOgg from '@/game/assets/thud.ogg'*/
import hallway from '@/game/assets/super-metroid/backgrounds/hallway.png'
import platform1 from '@/game/assets/super-metroid/tiles/platforms1.png'
import platform2 from '@/game/assets/super-metroid/tiles/platforms2.png'
import chozo from '@/game/assets/super-metroid/misc/chozo.png'
import eTank from '@/game/assets/super-metroid/misc/energytank.png'
import samus from '@/game/assets/super-metroid/samus/samus.png'


export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    /*this.load.image('sky', sky)
    this.load.image('bomb', bomb)
    this.load.audio('thud', [thudMp3, thudOgg])*/
    this.load.image("hallway", hallway);
    this.load.image("platform1", platform1);
    this.load.image("platform2", platform2);
    this.load.image("chozo", chozo);
    this.load.spritesheet("samus", samus, {frameWidth: 34, frameHeight: 43});
    this.load.spritesheet("eTank", eTank, {frameWidth: 16, frameHeight: 16});

    
  }

  create () {
    this.scene.start('PlayScene')
  }
}
