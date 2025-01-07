import { Component, signal } from '@angular/core';

@Component({
  selector: 'blog-muck-about-area',
  imports: [],
  template: `
    <div class="main">
      <h2>Signals</h2>
      <button (click)="onClick()">Run</button>
      <p>
          {{ label }}
      </p>
    </div>
    `,
  styleUrl: './muck-about-area.component.css'
})
export class MuckAboutAreaComponent {
  readonly count = signal(0)
  label: string = "signal(0): " + String(this.count)

  onClick() {
    // Set a signal
    this.count.set(3);
    this.label = this.label + " count.set(3): " + String(this.count)

    // Increment signal
    this.count.update(value => value + 1)
    this.label = this.label + " count.update(value => value + 1): " + String(this.count)
  }
}
