
import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { BlogImageService } from './blog-image.service';
import {UpperCasePipe} from '@angular/common';
import { SpacedText } from './spaced-text.pipe';

@Component({
  selector: 'blog-image',
  imports: [NgOptimizedImage, UpperCasePipe, SpacedText],
  templateUrl: './blog-image.component.html'
})
export class ImageWrapperComponent {
  src = "../../assets/hokkaido.png";
  alt = "../../assets/hokkaido.png";
  imageNames: string;

  constructor(private imageService: BlogImageService) {
    this.imageNames = this.imageService.getAllImages().join(", ");
  }

}
