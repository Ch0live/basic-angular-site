
import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'blog-image',
  imports: [NgOptimizedImage],
  templateUrl: './blog-image.component.html'
})
export class ImageWrapperComponent {
  src = "../../assets/hokkaido.png"
  alt = "../../assets/hokkaido.png"
}
