import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogButton } from './blog-button/blog-button.component';
import { posts } from './list-of-posts.json';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BlogButton],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogMainComponent {
  title = 'basic-blog';
  name = 'the Button Blog'
  buttonIsLive = true;
  listOfPosts = posts;
}
