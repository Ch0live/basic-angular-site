import { Component, inject, signal } from '@angular/core';
import { PostMetadata as PostMetadata } from './post.type'
import { ActivatedRoute } from '@angular/router';
import { ArticleService as ArticleService } from './article.service';

// TODO: Decide data structure for static articles so ArticleComponent can generate properly
@Component({
  selector: 'blog-article',
  templateUrl: 'article.component.html',
  styleUrl: 'article.component.css'
})
export class Article {
  path = signal<string>('');
  postMetadata = signal<PostMetadata | null>(null);
  postHtml = signal<string>('');

  private activatedRoute = inject(ActivatedRoute);
  private articleService = inject(ArticleService);

  constructor() {
    this.path.set(this.activatedRoute.snapshot.url[0].path);
    this.postMetadata.set(this.articleService.getByPath(this.path()));
    this.articleService.getArticle(this.path()).subscribe({
      next: (responseHtml) => {
        this.postHtml.set(responseHtml);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
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
