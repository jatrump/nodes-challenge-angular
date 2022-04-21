import { Component, Input } from "@angular/core";

@Component({
    selector: "node",
    templateUrl: "./node.component.html",
    styleUrls: ["./node.component.scss"],
})
export class Node {
    @Input() id: number = 0;
    @Input() x: number = 0;
    @Input() y: number = 0;
    @Input() color: string = '';
    selected: boolean = false
}
