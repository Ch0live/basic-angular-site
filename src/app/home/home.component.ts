import { Component } from "@angular/core";
import { ImageGrid } from "../image-grid/image-grid.component";

@Component({
  selector: 'home',
  imports: [ImageGrid], 
  template: `
    <h2>Hello there</h2>
    <p>
      Welcome to this corner of the internet. 
      This is a blog with some other experimental pages. 
    </p>
    <!-- TODO: Add a dice icon that can shuffle suggested blog posts -->
    <blog-image-grid />
  `
})
export class Home {}
