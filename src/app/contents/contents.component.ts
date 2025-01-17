import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import postMetadata from '../../assets/static-post-metadata.json';

@Component({
  selector: 'blog-contents',
  imports: [RouterLink],
  templateUrl: 'contents.component.html',
  styleUrl: 'contents.component.css'
})
export class Contents {
  listOfPostMetadata = postMetadata;
}
