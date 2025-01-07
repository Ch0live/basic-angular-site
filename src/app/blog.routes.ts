import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { BlogButton as TheButton } from './button-blog/blog-button/blog-button.component';
import { MuckAboutArea as MuckAboutArea } from './muck-about-area/muck-about-area.component';
import { TraditionalBlog as TraditionalBlog } from './traditional-blog/traditional-blog.component';
import { BlogContent } from './traditional-blog/blog-content/blog-content.component';

const mainRoutes: Routes = [
    {
        path: '', 
        title: 'Welcome!', 
        component: Home
    },
    {
        path: 'muck-about-area', 
        title: 'Experimental', 
        component: MuckAboutArea
    },
    {
        path: 'blog', 
        title: 'Bl0live', 
        component: TraditionalBlog
    },
    {
        path: 'button-blog', 
        title: 'The Button', 
        component: TheButton
    }
];

const blogRoutes: Routes = [
    {
        path: 'blog/blog-content', 
        title: 'First article', 
        component: BlogContent
    }
];

export const routes: Routes = [...mainRoutes, ...blogRoutes]
