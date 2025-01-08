import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { postsList } from '../content/list-of-posts.json';

@Component({
  selector: 'blog-traditional-blog',
  imports: [RouterLink],
  templateUrl: 'traditional-blog.component.html',
  styleUrl: 'traditional-blog.component.css'
})
export class TraditionalBlog {
  listOfPosts = postsList
}
