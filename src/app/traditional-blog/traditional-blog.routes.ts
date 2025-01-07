import { Routes } from '@angular/router';
import { BlogContent } from './blog-content/blog-content.component';

export const blogRoutes: Routes = [
    {
        path: 'blog-content', 
        title: 'Content', 
        component: BlogContent
    }
];
