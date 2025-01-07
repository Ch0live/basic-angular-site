import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { BlogContent } from './traditional-blog/blog-content/blog-content.component';
import { BlogButton } from './button-blog/blog-button/blog-button.component';
import { MuckAboutAreaComponent } from './muck-about-area/muck-about-area.component';

export const routes: Routes = [
    {
        path: '', 
        title: 'Welcome!', 
        component: Home
    },
    {
        path: 'muck-about-area', 
        title: 'Experimental', 
        component: MuckAboutAreaComponent
    },
    {
        path: 'blog', 
        title: 'A Blog in Angular', 
        component: BlogContent
    },
    {
        path: 'button-blog', 
        title: 'Button Blog', 
        component: BlogButton
    }
];
