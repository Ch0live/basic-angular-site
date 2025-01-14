import { Component } from "@angular/core";
import { ImageGrid } from "../image-grid/image-grid.component";
import { PostMetadataInputWrapper } from "../article/post.type";
import postMetadataJson from "../../assets/static-post-metadata.json"
import { ShufflerComponent } from "../shuffler/shuffler.component";

@Component({
  selector: 'home',
  imports: [ImageGrid, ShufflerComponent], 
  template: `
    <h2>Hello there</h2>
    <p>
      Welcome to this corner of the internet. 
      This is a blog with some other experimental pages. 
    </p>
    <blog-shuffler /> <!-- // TODO: Move inside image grid as it's directly related and will help with logic -->
    <blog-image-grid [postMetadata]="metadataFromJson" />
  `
})
export class Home {
  // Wrapped in unique type as signals can't take array types
  metadataFromJson: PostMetadataInputWrapper = {
    metadata: postMetadataJson
  }
}
