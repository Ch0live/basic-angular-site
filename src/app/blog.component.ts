import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogContent } from './blog-content/blog-content.component'
import { MuckAboutAreaComponent } from "./muck-about-area/muck-about-area.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BlogContent, MuckAboutAreaComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogMainComponent {
  title = 'basic-blog';
  name = 'the Button Blog'
}
