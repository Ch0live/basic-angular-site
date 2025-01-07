import { Component } from '@angular/core';
import { MuckAboutAreaComponent } from "./muck-about-area/muck-about-area.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'blog',
  imports: [MuckAboutAreaComponent, RouterLink, RouterOutlet],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class Blog {
  title = 'Angular Blog Site';
}
