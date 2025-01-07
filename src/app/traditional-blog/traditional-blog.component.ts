import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { posts } from '../list-of-posts.json'

@Component({
  selector: 'blog-traditional-blog',
  imports: [RouterLink],
  templateUrl: './traditional-blog.component.html',
  styleUrl: './traditional-blog.component.css'
})
export class TraditionalBlog {
  listOfPosts = posts
  getUrl() {
    return "grand-canyon"
  }
}
