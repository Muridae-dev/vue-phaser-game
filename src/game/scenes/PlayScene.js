import { Scene } from 'phaser'
import { setTransitionHooks } from 'vue';

let platforms;
let chozo;
let eTank;
let player;
let cursors;
let ball = false;

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' })
  }

  create () {
    /*this.add.image(400, 300, 'sky')

    const bomb = this.physics.add.image(400, 200, 'bomb')
    bomb.setCollideWorldBounds(true)
    bomb.body.onWorldBounds = true // enable worldbounds collision event
    bomb.setBounce(1)
    bomb.setVelocity(200, 20)

    this.sound.add('thud')
    this.physics.world.on('worldbounds', () => {
      this.sound.play('thud', { volume: 0.75 })
    })*/

    this.add.image(0, 0, "hallway").setOrigin(0,0).setScale(3)

    platforms = this.physics.add.staticGroup()
    platforms.create(0,568, "platform1").setOrigin(0,0).setScale(2).refreshBody()
    platforms.create(550, -200, "platform2").setOrigin(0,0).setScale(2).refreshBody()
    
    //chozo = this.physics.add.staticGroup()
    //chozo.create(650,423, "chozo").setOrigin(0,0).setScale(3).setInteractive(this.input.makePixelPerfect()).refreshBody();
    let chozo = this.physics.add.staticSprite(650,423, "chozo").setOrigin(0,0).setScale(3)
    chozo.setBodySize(100,150).setOffset(75,20)

    let eTank = this.physics.add.staticSprite(655,430, "eTank").setOrigin(0,0).setScale(2.5)
    eTank.setBodySize(40,40).setOffset(8,8)

    player = this.physics.add.sprite(100, 450, "samus").setScale(2)
    player.setBodySize(20, 43)
    player.setCollideWorldBounds(true)
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, chozo)

    cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({
      key: "running",
      frames: this.anims.generateFrameNames("samus", { start:0, end: 9}),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNames("samus", { start: 10, end: 12}),
      frameRate: 5,
      repeat: -1
    })

    this.anims.create({
      key: "ball", 
      frames: this.anims.generateFrameNames("samus", { start: 20, end: 27}),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: "eTankShine",
      frames: this.anims.generateFrameNames("eTank", {start:0, end: 1}),
      frameRate: 8,
      repeat: -1
    })

    eTank.anims.play("eTankShine")
    

  }

  update () {
    if (cursors.down.isDown) {
      ball = true;
    }
    if (cursors.up.isDown) {
      ball = false;
    }

    if(ball) {
      player.setBodySize(20,20)
      player.setOffset(7,24)
    }
    if(!ball) {
      player.setBodySize(20, 43)
    }

    if(cursors.left.isDown) {
      player.setVelocityX(-300);

      if(!ball)player.anims.play("running", true);
      if(ball)player.anims.play("ball", true)
      player.flipX = true;
    }
    else if(cursors.right.isDown) {
      player.setVelocityX(300);
      
      if(!ball)player.anims.play("running", true);
      if(ball)player.anims.play("ball", true)
      player.flipX = false;
    }
    else {
      player.setVelocityX(0);

      if(!ball)player.anims.play("idle", true)
      if(ball)player.anims.play("ball", true)
    }
  }
}
