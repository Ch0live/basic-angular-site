import { Component } from '@angular/core';
import { ImageWrapperComponent } from '../blog-image/blog-image.component';
import { Post } from './post.type'
import { ActivatedRoute } from '@angular/router';
import { GetArticleService } from './get-article.service';

// TODO: Decide data structure for static articles so ArticleComponent can generate properly
@Component({
  selector: 'blog-article',
  imports: [ImageWrapperComponent],
  templateUrl: 'article.component.html',
  styleUrl: 'article.component.css'
})
export class Article {
  path: string;
  post: Post;

  constructor(private activatedRoute: ActivatedRoute) {
    this.path = this.activatedRoute.snapshot.url[0].path;
    this.post = new GetArticleService().getByPath(this.path);
  }

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
