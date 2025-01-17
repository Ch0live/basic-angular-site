import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostMetadata } from 'src/app/article/post.type';
import { PostMetadataInputWrapper } from 'src/app/article/post.type';

@Component({
  selector: 'blog-suggested-articles',
  animations: [
    trigger('spinDice', [
      state(
        'static',
        style({
          transform: 'rotate(0)'
        })
      ),
      state(
        'spinning',
        style({
          transform: 'rotate(0)'
        })
      ),
      transition('static <=> spinning', [
        animate(
          '1s ease-out',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: 0 }),
            style({ transform: 'rotate(1080deg)', offset: 1 }), // 3 full spins
          ])
        ),
      ]),
    ]),
  ],
  imports: [RouterLink],
  templateUrl: './suggested-articles.component.html',
  styleUrl: './suggested-articles.component.css'
})
export class SuggestedArticles {
  diceSrc = "/assets/svg/dice/dice-frame-1.svg";
  diceState = 'static';
  postMetadata = input.required<PostMetadataInputWrapper>();
  featuredPostMetadata: PostMetadata[] = [];

  ngOnInit() {
    this.shuffleArticles(); //TODO make this the only way it renders (currently reshuffles after loadiing)
  }
  
  shuffleArticles() {
    this.diceState = this.diceState === 'static' ? 'spinning' : 'static';
    const allArticles: PostMetadata[] = this.postMetadata().metadata;
    setTimeout(() => {
      this.featuredPostMetadata = this.pickRandomThree(allArticles);
    }, 500);
  }

  pickRandomThree(arr: PostMetadata[]): PostMetadata[] {
    if (arr.length <= 3) {
      return this.shuffleList(arr);
    } else {
      return this.shuffleList(arr).slice(0, 3);
    }
  };

  shuffleList(arr: PostMetadata[]): PostMetadata[] {
    return Array.from(arr).sort(() => 0.5 - Math.random());
  }
}
