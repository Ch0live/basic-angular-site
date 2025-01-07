import { Component, signal } from '@angular/core';

@Component({
  selector: 'blog-muck-about-area',
  imports: [],
  templateUrl: './muck-about-area.component.html',
  styleUrl: './muck-about-area.component.css'
})
export class MuckAboutAreaComponent {
  readonly count = signal(0)
  label = String(this.count);
}
