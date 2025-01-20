import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import postMetadata from '../../assets/static-post-metadata.json';
import { SearchBarComponent } from "./search-bar/search-bar.component";

@Component({
  selector: 'blog-contents',
  imports: [RouterLink, SearchBarComponent],
  templateUrl: 'contents.component.html',
  styleUrl: 'contents.component.css'
})
export class Contents {
  listOfPostMetadata = postMetadata;
}
