import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'blog',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: 'blog.component.html',
  styleUrl: 'blog.component.css'
})
export class Blog {}
