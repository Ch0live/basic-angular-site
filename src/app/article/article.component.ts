import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImageWrapperComponent } from '../blog-image/blog-image.component';

@Component({
  selector: 'blog-article',
  imports: [ImageWrapperComponent],
  templateUrl: 'article.component.html',
  styleUrl: 'article.component.css'
})
export class Article {
  url: string = '';
  date: string = '';
  heading: string = '';
  imagePath: string = '';

  constructor() {
    this.url = "the-grand-canyon"
    console.log(this.url)
    this.date = "1st of Jan, 2024"
    this.heading = "Hello!"
    this.imagePath = "../../assets/hokkaido.png"
  }

// TODO: Decide data structure for static articles so ArticleComponent can generate properly

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
