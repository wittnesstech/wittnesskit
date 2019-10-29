import { Scene } from "phaser";
import sky from "../assets/sky.png";
import bomb from "../assets/bomb.png";
import pencil from "../assets/pencil.png";
import flag from "../assets/flag.png";
// import peace from "../assets/peace.svg";
import thudMp3 from "../assets/thud.mp3";
import thudOgg from "../assets/thud.ogg";

export default class BootScene extends Scene {
  constructor() {
    super({ key: "BootScene" });
  }

  preload() {
    this.load.image("sky", sky);
    this.load.image("bomb", bomb);
    this.load.image("pencil", pencil);
    // this.load.image("peace", peace);
    this.load.image("flag", flag);
    this.load.audio("thud", [thudMp3, thudOgg]);
  }

  create() {
    this.scene.start("PlayScene");
  }
}
