import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/blog.config';
import { BlogMainComponent } from './app/blog.component';

bootstrapApplication(BlogMainComponent, appConfig)
  .catch((err) => console.error(err));
