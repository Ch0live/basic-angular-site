
import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {UpperCasePipe} from '@angular/common';
import { SpacedText } from './spaced-text.pipe';

@Component({
  selector: 'blog-image',
  imports: [NgOptimizedImage, UpperCasePipe, SpacedText],
  templateUrl: 'blog-image.component.html'
})
export class ImageWrapperComponent { //TODO: Turn into attribute selector
  src = "../../assets/hokkaido.png";
  alt = "../../assets/hokkaido.png";
  imageNames = "imageNames"
}
