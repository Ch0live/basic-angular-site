// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Routes } from "@angular/router";
// import { Article } from "./article/article.component";

// @Injectable({
//     providedIn: 'root'
// })
// export class BlogRoutesService {
//     constructor(private http: HttpClient) {}
// }

// generateRoutes = (data: any[]): Routes => {
//     return data.map(post => ({
//         path: post.path,
//         title: post.heading,
//         component: Article
//     }));
// };

// // Usage example
// const blogRoutesService = new BlogRoutesService(new HttpClient());
// blogRoutesService.getRoutes().subscribe(data => {
// const routes: Routes = [
//     {
//     path: '',
//     children: generateRoutes(data)
//     }
// ];

// // Use the routes in your Angular module
// // RouterModule.forRoot(routes)
// });
