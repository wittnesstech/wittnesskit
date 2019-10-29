import { Scene } from "phaser";

export default class PlayScene extends Scene {
  constructor() {
    super({ key: "PlayScene" });
  }

  create() {
    this.add.image(400, 300, "sky");

    const flag = this.physics.add.image(600, 250, "flag");
    // const pencil = this.physics.add.image(400, 200, "pencil");
    // const peace = this.physics.add.image(500, 400, "peace");
    const bomb = this.physics.add.image(400, 200, "bomb");
    let gamePieces = [bomb, flag];
    for (let piece of gamePieces) {
      piece.setCollideWorldBounds(true);
      // piece.setCollideBodies(true);
      piece.body.onWorldBounds = true; // enable worldbounds collision event
    }
    bomb.setBounce(1);
    bomb.setVelocity(200, 20);
    flag.setVelocity(1, 10);
    flag.setBounce(0.91);
    flag.mass = 1200;

    this.sound.add("thud");
    this.physics.world.on("worldbounds", () => {
      // this.sound.play("thud", { volume: 0.75 });
    });
  }

  update() {}
}
