import { bootstrapApplication } from '@angular/platform-browser';
import { Blog } from './app/blog.component';
import { config } from './app/blog.config.server';

const bootstrap = () => bootstrapApplication(Blog, config);

export default bootstrap;
