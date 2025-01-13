import { Component, input } from '@angular/core';
import { PostMetadataInputWrapper, PostMetadata } from '../article/post.type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'blog-image-grid',
  imports: [RouterLink],
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.css'
})
export class ImageGrid {
  postMetadata = input.required<PostMetadataInputWrapper>(); // TODO: Decide if this component is worth testing anymore
}
