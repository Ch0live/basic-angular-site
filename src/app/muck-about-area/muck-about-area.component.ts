import { Component, Input, output, Output, OutputEmitterRef, signal } from '@angular/core';
import { EventEmitter } from 'stream';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'blog-muck-about-area',
  imports: [ChildComponent],
  templateUrl: './muck-about-area.component.html',
  styleUrl: './muck-about-area.component.css'
})
export class MuckAboutAreaComponent {
  @Input() occupation = '';

  // Done with annotations
  addOne(one: number) {}

  // Done with signals
  buttonLabel2 = output<string>();
}
