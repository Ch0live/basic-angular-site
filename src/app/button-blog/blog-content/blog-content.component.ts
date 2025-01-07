import { Component } from '@angular/core';
import { BlogButton } from '../blog-button/blog-button.component';
import { posts } from '../../list-of-posts.json';

@Component({
  selector: 'blog-content',
  imports: [BlogButton],
  templateUrl: './blog-content.component.html',
  styleUrl: './blog-content.component.css'
})
export class BlogContent {
  title = 'basic-blog';
  name = 'the Button Blog'
  buttonIsLive = true;
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
