import { Injectable } from '@angular/core';
import { postsList } from '../content/list-of-posts.json';
import { Post } from './post.type';

@Injectable({
  providedIn: 'root'
})
export class GetArticleService {
  posts: Post[];

  constructor() {
    this.posts = postsList;
  }

  getByPath(name: string) {
    for (const post of this.posts) {
      if (name === post.path) {
        return post;
      }
    }
    throw new Error("Unable to find post in postsJson");
  }
}
