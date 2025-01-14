import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShufflerComponent } from "./shuffler/shuffler.component";
import { PostMetadataInputWrapper } from 'src/app/article/post.type';

@Component({
  selector: 'blog-suggested-articles',
  imports: [RouterLink, ShufflerComponent],
  templateUrl: './suggested-articles.component.html',
  styleUrl: './suggested-articles.component.css'
})
export class SuggestedArticles {
  shuffleArticles() {
    console.log("Shuffling");
  }
  postMetadata = input.required<PostMetadataInputWrapper>(); // TODO: Decide if this component is worth testing anymore
}
