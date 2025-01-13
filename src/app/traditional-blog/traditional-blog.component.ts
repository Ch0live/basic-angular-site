import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import postMetadata from '../../assets/static-post-metadata.json';

@Component({
  selector: 'blog-traditional-blog',
  imports: [RouterLink],
  templateUrl: 'traditional-blog.component.html',
  styleUrl: 'traditional-blog.component.css'
})
export class TraditionalBlog {
  listOfPostMetadata = postMetadata;
}
