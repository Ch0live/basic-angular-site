
import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BlogImageService } from './blog-image.service';

@Component({
  selector: 'blog-image',
  imports: [NgOptimizedImage],
  templateUrl: './blog-image.component.html'
})
export class ImageWrapperComponent {
  src = "../../assets/hokkaido.png";
  alt = "../../assets/hokkaido.png";

  imageService = inject(BlogImageService);

  imageNames = this.imageService.getAllImages();
}
