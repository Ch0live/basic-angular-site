import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { BlogContent } from './button-blog/blog-content/blog-content.component';
import { BlogButton } from './button-blog/blog-button/blog-button.component';

export const routes: Routes = [
    {
        path: '', 
        title: 'Welcome!', 
        component: Home
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
