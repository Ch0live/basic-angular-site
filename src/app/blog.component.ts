import { Component } from '@angular/core';
import { BlogContent } from './button-blog/blog-content/blog-content.component'
import { MuckAboutAreaComponent } from "./muck-about-area/muck-about-area.component";
import { BlogButton } from "./button-blog/blog-button/blog-button.component";

@Component({
  selector: 'blog',
  imports: [BlogContent, MuckAboutAreaComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class Blog {
  title = 'Angular Blog Site';
}
