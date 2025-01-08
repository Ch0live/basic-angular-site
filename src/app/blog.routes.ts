import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { ButtonBlog } from './button-blog/button-blog.component';
import { MuckAboutArea as MuckAboutArea } from './muck-about-area/muck-about-area.component';
import { TraditionalBlog as TraditionalBlog } from './traditional-blog/traditional-blog.component';
import listOfPosts from './list-of-posts.json' // TODO: Pull path from json
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
                path: 'the-grand-canyon', 
                title: 'Grand Canyon', 
                component: Article
            },
            {
                path: 'the-narrows', 
                title: 'Zion', 
                component: Article
            },
            {
                path: 'the-rockies',  
                title: 'Rockies', 
                component: Article
            },
        ]
    },
    {
        path: 'button-blog', 
        title: 'The Button', 
        component: ButtonBlog
    }
];
