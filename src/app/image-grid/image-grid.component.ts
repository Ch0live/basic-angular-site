import { Component } from '@angular/core';
import { staticPostList } from '../../assets/list-of-static-posts.json';
import { Post } from '../article/post.type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'blog-image-grid',
  imports: [RouterLink],
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.css'
})
export class ImageGrid {
  listOfPosts: Post[];
  imgOne: Post;
  imgTwo: Post;
  imgThr: Post;

  constructor() {
    this.listOfPosts = staticPostList;
    this.imgOne = this.listOfPosts[0];
    this.imgTwo = this.listOfPosts[1];
    this.imgThr = this.listOfPosts[2];
  }
}
