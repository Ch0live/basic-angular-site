import { Component } from '@angular/core';
import { ImageWrapperComponent } from '../blog-image/blog-image.component';
import { posts } from '../list-of-posts.json';

@Component({
  selector: 'blog-article',
  imports: [ImageWrapperComponent],
  templateUrl: 'article.component.html',
  styleUrl: 'article.component.css'
})
export class Article {
  appendedImgStyling: string = '';
  listOfPosts = posts;
  imagePath = 'assets/hokkaido.png';

  growImage() {
    console.log("grow image")
    this.appendedImgStyling = 'transform: scale(1.05); transition: transform 0.1s ease-in-out;';
  }

  ungrowImage() {
    console.log("shrink image")
    this.appendedImgStyling = 'transform: scale(1); transition: transform 0.1s ease-in-out;';
  }
}
