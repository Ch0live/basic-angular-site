import { Component } from '@angular/core';
import { Post as PostMetadata } from './post.type'
import { ActivatedRoute } from '@angular/router';
import { ArticleService as ArticleService } from './article.service';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

// TODO: Decide data structure for static articles so ArticleComponent can generate properly
@Component({
  selector: 'blog-article',
  imports: [],
  templateUrl: 'article.component.html',
  styleUrl: 'article.component.css'
})
export class Article { 
  path: string;
  postMetadata: PostMetadata;
  postHtml: string = "";

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) {
    this.path = this.activatedRoute.snapshot.url[0].path;
    this.postMetadata = articleService.getByPath(this.path);
    articleService.getArticle(this.path).subscribe({
      next: (responseHtml) => {
        console.log('HTML content fetched');
        this.postHtml = responseHtml;
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.log('Article fetching complete');
      }
    });
  }

  appendedImgStyling: string = '';

  growImage() {
    this.appendedImgStyling = 'transform: scale(1.05); transition: transform 0.1s ease-in-out;';
  }

  ungrowImage() {
    this.appendedImgStyling = 'transform: scale(1); transition: transform 0.1s ease-in-out;';
  }
}
