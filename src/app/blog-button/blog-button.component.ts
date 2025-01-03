import { Component, signal } from '@angular/core';

@Component({
  selector: 'blog-button',
  templateUrl: './blog-button.component.html',
  // standalone: true
})
export class BlogButton {
  getNextParagraph = signal(false);
}
