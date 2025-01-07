import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'zippy',
    template: `
    <div>
      <button style="width: 200px; height: 50px; font-size: 2em;" (click)="toggle()">Toggle</button>
      <div [hidden]="!visible">
        <ng-content></ng-content>
      </div>
   </div>`})
  export class Zippy {
    visible: boolean = false;
    @Output() openEvent: EventEmitter<any> = new EventEmitter();
    @Output() closeEvent: EventEmitter<any> = new EventEmitter();
    toggle() {
      this.visible = !this.visible;
      if (this.visible) {
        this.openEvent.emit(null);
      } else {
        this.closeEvent.emit(null);
      }
    }
  }