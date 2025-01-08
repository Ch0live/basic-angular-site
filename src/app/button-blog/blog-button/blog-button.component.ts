import { Component } from '@angular/core';

@Component({
  selector: 'button[nextpage]',
  template: '<ng-content></ng-content>', 
  styleUrl: 'blog-button.component.css'
})
export class BlogButton {
  greeting: string = ""
  greet() {
    console.log('Hello there 👋');
    this.greeting = "Hello there 👋";
  }
}
