import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/blog.config';
import { Blog } from './app/blog.component';

bootstrapApplication(Blog, appConfig)
  .catch((err) => console.error(err));
