import { Component } from '@angular/core';

@Component({
  selector: 'blog-button-blog',
  imports: [],
  templateUrl: './button-blog.component.html',
  styleUrl: './button-blog.component.css'
})
export class ButtonBlog {
  greeting: string = ""
  greet() {
    console.log('Hello there 👋');
    this.greeting = "Hello there 👋";
  }
}
