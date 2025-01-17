import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { MuckAboutArea as MuckAboutArea } from './muck-about-area/muck-about-area.component';
import { Article as Article } from './article/article.component';
import allPostMetadata from '../assets/static-post-metadata.json'
import { Contents } from './contents/contents.component';

const traditionalBlogRoute = {
    path: '', 
    title: 'All articles', 
    component: Contents
}

// Create route objects for each path
const staticBlogRoutes = allPostMetadata.map(postMetadata => ({
  path: postMetadata.path,
  title: postMetadata.heading, 
  component: Article
}));

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
        children: [traditionalBlogRoute,  ...staticBlogRoutes]
    }
];
