import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'blog-muck-about-area',
  imports: [],
  template: `
    <div class="main">
      <h2>Signals</h2>
      <button (click)="onAlphaClick()">Alpha</button>
      <button (click)="onBetaClick()">Beta</button>
      <p>
          {{ count() }}<br>{{ doubleCount() }}<br>{{ powerCount() }}
      </p>
      <h3>
        Log of events:
      </h3>
      <span>
        {{ logOfEvents }}
      </span>

    </div>
    `,
  styleUrl: './muck-about-area.component.css'
})
export class MuckAboutAreaComponent {
  readonly count = signal(0)
  readonly doubleCount = computed(() => this.count() * 2);
  readonly powerCount = computed(() => this.count() ** 2);
  logOfEvents: string[] = [];

  constructor() {
    effect(() => {
      this.logOfEvents.push(this.computeCountLog())
    });
  }

  onAlphaClick() {
    this.count.update(() => this.count() + 1);
  }

  onBetaClick() {
    this.count.update(() => this.count() - 1);
  }

  computeCountLog(): string {
    return `count: ${this.count} doubleCount: ${this.doubleCount} powerCount: ${this.powerCount}`;
  }
}
