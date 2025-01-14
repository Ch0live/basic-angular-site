import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostMetadata } from 'src/app/article/post.type';
import { PostMetadataInputWrapper } from 'src/app/article/post.type';

@Component({
  selector: 'blog-suggested-articles',
  imports: [RouterLink],
  templateUrl: './suggested-articles.component.html',
  styleUrl: './suggested-articles.component.css'
})
export class SuggestedArticles {
  postMetadata = input.required<PostMetadataInputWrapper>(); // TODO: Decide if this component is worth testing anymore
  featuredPostMetadata: PostMetadata[] = [];

  ngOnInit() {
    this.shuffleArticles();
  }
  
  shuffleArticles() {
    const allArticles: PostMetadata[] = this.postMetadata().metadata;
    this.featuredPostMetadata = this.pickRandomThree(allArticles);
  }

  pickRandomThree(arr: PostMetadata[]): PostMetadata[] {
    if (arr.length > 3) {
      return this.shuffleList(arr);
    } else {
      return this.shuffleList(arr).slice(0, 3);
    }
  };

  shuffleList(arr: PostMetadata[]): PostMetadata[] {
    return Array.from(arr).sort(() => 0.5 - Math.random());
  }
}
