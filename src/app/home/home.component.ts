import { Component } from "@angular/core";
import { PostMetadataInputWrapper } from "../article/post.type";
import postMetadataJson from "../../assets/static-post-metadata.json"
import { SuggestedArticles } from "./suggested-articles/suggested-articles.component";

@Component({
  selector: 'home',
  imports: [SuggestedArticles], 
  template: `
  <div class="newspaperColumnWrapper">
    <div class="newspaperColumn">
      <h2>Hello there</h2>
      <p>
        Welcome to this corner of the internet. 
        This is a blog with some other experimental pages.<br><br>
        Why not try your luck? Click the dice to load some randomly chosen articles.
      </p>
    </div>
  </div>
  <blog-suggested-articles [postMetadata]="metadataFromJson" />
  <div class="newspaperColumnWrapper">
    <div class="newspaperColumn">
      <p>
        Alternatively, click Blog to see a comprehensive list of all articles.
      </p>
    </div>
  </div>
  `
})
export class Home {
  // Wrapped in unique type as signals can't take array types
  metadataFromJson: PostMetadataInputWrapper = {
    metadata: postMetadataJson
  }
}
