import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/blog.component';
import { config } from './app/blog.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
