import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { BlogButton as TheButton } from './button-blog/blog-button/blog-button.component';
import { MuckAboutArea as MuckAboutArea } from './muck-about-area/muck-about-area.component';
import { TraditionalBlog as TraditionalBlog } from './traditional-blog/traditional-blog.component';
import { BlogContent } from './traditional-blog/blog-content/blog-content.component';
import listOfPosts from './list-of-posts.json' // TODO: Pull path from json

export const routes: Routes = [
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
        component: TraditionalBlog, 
        children: [
            {
                path: 'the-grand-canyon', 
                title: 'Grand Canyon', 
                component: BlogContent
            },
            {
                path: 'the-narrows', 
                title: 'Zion', 
                component: BlogContent
            },
            {
                path: 'the-rockies', 
                title: 'Rockies', 
                component: BlogContent
            },
        ]
    },
    {
        path: 'button-blog', 
        title: 'The Button', 
        component: TheButton
    }
];
