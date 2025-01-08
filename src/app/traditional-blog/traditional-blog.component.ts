import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { posts } from '../list-of-posts.json'

@Component({
  selector: 'blog-traditional-blog',
  imports: [RouterLink, RouterOutlet],
  templateUrl: 'traditional-blog.component.html',
  styleUrl: 'traditional-blog.component.css'
})
export class TraditionalBlog {
  listOfPosts = posts
}
