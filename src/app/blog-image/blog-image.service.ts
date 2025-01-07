import { Injectable } from '@angular/core';
import { posts } from '../list-of-posts.json';

@Injectable({
  providedIn: 'root' // Available to entire service
})
export class BlogImageService {

    getAllImages(): string[] {
        return posts.map(post => post.image);
    }

}
