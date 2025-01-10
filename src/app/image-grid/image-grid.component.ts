import { Component } from '@angular/core';
import { staticPostList } from '../../assets/list-of-static-posts.json';
import { Post } from '../article/post.type';

@Component({
  selector: 'blog-image-grid',
  imports: [],
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.css'
})
export class ImageGrid {
  postsMetadata: Post[];
  imgOne: Post;
  imgTwo: Post;
  imgThr: Post;

  constructor() {
    this.postsMetadata = staticPostList;
    this.imgOne = this.postsMetadata[0];
    this.imgTwo = this.postsMetadata[1];
    this.imgThr = this.postsMetadata[2];
  }
}
