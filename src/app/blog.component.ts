import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogButton } from './blog-button/blog-button.component';
import { posts } from './list-of-posts.json';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BlogButton],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogMainComponent {
  title = 'basic-blog';
  name = 'the Button Blog'
  buttonIsLive = true;
  listOfPosts = posts;
  imagePath = 'assets/hokkaido.png';

  // Grow image on hover
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
