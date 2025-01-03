import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogButton } from './blog-button/blog-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BlogButton],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogMainComponent {
  title = 'basic-blog';
  name = 'bill'
  buttonIsLive = true;
}
