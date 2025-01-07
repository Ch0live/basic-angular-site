import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'blog',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class Blog {
  title = 'Angular Blog Site';
}
