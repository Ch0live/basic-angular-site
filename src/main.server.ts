import { bootstrapApplication } from '@angular/platform-browser';
import { BlogMainComponent } from './app/blog.component';
import { config } from './app/blog.config.server';

const bootstrap = () => bootstrapApplication(BlogMainComponent, config);

export default bootstrap;
