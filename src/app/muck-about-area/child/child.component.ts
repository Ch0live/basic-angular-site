import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'blog-child',
  imports: [],
  templateUrl: 'child.component.html',
  styleUrl: 'child.component.css'
})
export class ChildComponent {
  @Output() incrementCountEvent = new EventEmitter<number>();
  count = 0;
  increment() {
    this.count++;
    // emit sends this.count as an event (in our case to the component above)
    this.incrementCountEvent.emit(this.count);
  }
}
