import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/blog.config';
import { AppComponent } from './app/blog.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
