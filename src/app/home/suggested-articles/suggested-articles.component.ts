import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostMetadata } from 'src/app/article/post.type';
import { PostMetadataInputWrapper } from 'src/app/article/post.type';

@Component({
  selector: 'blog-suggested-articles',
  animations: [
    trigger('spinDice', [
      transition('static => spinning', [
        animate(
          '1s ease-out',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: 0 }),
            style({ transform: 'rotate(1080deg)', offset: 1 }),
          ])
        ),
      ])
    ]),
  ],
  imports: [RouterLink],
  templateUrl: './suggested-articles.component.html',
  styleUrl: './suggested-articles.component.css'
})
export class SuggestedArticles {
  diceState = 'static';
  postMetadata = input.required<PostMetadataInputWrapper>();
  featuredPostMetadata: PostMetadata[] = [];
  diceSrc = "/assets/svg/dice/dice-frame-1.svg";
  diceSrcList: string[] = [];

  constructor() {
    this.generateDiceSrcList();
  }

  generateDiceSrcList() {
    for (let i = 1; i <= 6; i++) {
      this.diceSrcList.push(`/assets/svg/dice/dice-frame-${i}.svg`);
    }
  }

  changeDiceSrc() {
    const randomIndex = Math.floor(Math.random() * this.diceSrcList.length);
    return this.diceSrcList[randomIndex];
  }

  shuffleArticles() {
    this.diceState = this.diceState === 'static' ? 'spinning' : 'static';
    if(this.diceState == "spinning") {
      const allArticles: PostMetadata[] = this.postMetadata().metadata;
      setTimeout(() => {
        this.featuredPostMetadata = this.pickRandomTen(allArticles);
        if(this.diceState == "spinning") {
          this.diceState = "static";
        }
      }, 1000);
    }
    this.diceSrc = this.changeDiceSrc();
  }

  pickRandomTen(arr: PostMetadata[]): PostMetadata[] {
    if (arr.length <= 3) {
      return this.shuffleList(arr);
    } else {
      return this.shuffleList(arr).slice(0, 5);
    }
  };

  shuffleList(arr: PostMetadata[]): PostMetadata[] {
    return Array.from(arr).sort(() => 0.5 - Math.random());
  }
}
