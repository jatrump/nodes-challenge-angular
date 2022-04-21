import { Component } from "@angular/core";

@Component({
  selector: "node-arena",
  templateUrl: "./arena.component.html",
  styleUrls: ["./arena.component.scss"]
})
export class Arena {
  numberOfNodes: number = 0;
  nodes: Array<{}> = [];

  buildNodeMap(numberOfNodes: number) {
    const arena = document.getElementById("arena");
    const newNodes = [];
    if(arena) {
      const arenaBoundingRect = arena.getBoundingClientRect();
      for (let i = 0; i < numberOfNodes; i++) {
        newNodes.push({
          x: this.generateRandomNumber(36, arenaBoundingRect.width - 36),
          y: this.generateRandomNumber(136, arenaBoundingRect.height + 36),
          color: `rgb(
            ${this.generateRandomNumber(0, 255)},
            ${this.generateRandomNumber(0, 255)},
            ${this.generateRandomNumber(0, 255)}
          )`,
          id: i
        });
      }
    }
    this.nodes = newNodes;
  }
  generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
