import { Component } from '@angular/core';
import { posts } from '../../list-of-posts.json';

@Component({
  selector: 'blog-content',
  imports: [],
  templateUrl: './blog-content.component.html',
  styleUrl: './blog-content.component.css'
})
export class BlogContent {
  title = 'basic-blog';
  name = 'blog'
  listOfPosts = posts;
  imagePath = 'assets/hokkaido.png';

  appendedImgStyling: string = '';

  growImage() {
    console.log("grow image")
    this.appendedImgStyling = 'transform: scale(1.05); transition: transform 0.1s ease-in-out;';
  }

  ungrowImage() {
    console.log("shrink image")
    this.appendedImgStyling = 'transform: scale(1); transition: transform 0.1s ease-in-out;';
  }
}
