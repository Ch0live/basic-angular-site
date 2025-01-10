import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { staticPostList } from '../../assets/list-of-static-posts.json';

@Component({
  selector: 'blog-traditional-blog',
  imports: [RouterLink],
  templateUrl: 'traditional-blog.component.html',
  styleUrl: 'traditional-blog.component.css'
})
export class TraditionalBlog {
  listOfPosts = staticPostList
}
