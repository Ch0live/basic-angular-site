import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { MuckAboutArea as MuckAboutArea } from './muck-about-area/muck-about-area.component';
import { TraditionalBlog as TraditionalBlog } from './traditional-blog/traditional-blog.component';
import { Article as Article } from './article/article.component';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full'
    },
    {
        path: 'home', 
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
        children: [
            {
                path: '', 
                title: 'Bl0live', 
                component: TraditionalBlog
            },
            {
                path: 'cape-may-beach-day', 
                title: 'Cape May', 
                component: Article
            },
            {
                path: 'the-narrows-of-zion', 
                title: 'Zion', 
                component: Article
            },
            {
                path: 'the-red-rock-state',  
                title: 'Colorado', 
                component: Article
            },
        ]
    }
];
