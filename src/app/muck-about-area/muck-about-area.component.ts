import { Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'blog-muck-about-area',
  imports: [],
  template: `
    <div class="main">
      <h2>Signals</h2>
      <button (click)="onClick()">Run</button>
      <p>
          {{ count() }}<br>{{ doubleCount() }}<br>{{ powerCount() }}
      </p>
    </div>
    `,
  styleUrl: './muck-about-area.component.css'
})
export class MuckAboutAreaComponent {
  readonly count = signal(0)
  readonly doubleCount = computed(() => this.count() * 2);
  readonly powerCount = computed(() => this.count() ** 2);

  onClick() {
    // Set a signal
    this.count.update(() => this.count() + 1);
  }
}
