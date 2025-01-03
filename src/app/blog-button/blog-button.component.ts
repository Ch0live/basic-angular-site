import { Component, signal } from '@angular/core';

@Component({
  selector: 'blog-button',
  templateUrl: './blog-button.component.html'
})
export class BlogButton {
  getNextParagraph = signal(false);
  colourOfButton = "red"
  greet() {
    console.log('Hello there 👋');
  }
}
