import { Injectable } from '@angular/core';
import postMetadataJson from '../../assets/static-post-metadata.json';
import { PostMetadata, PostMetadataInputWrapper } from './post.type';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  postsMetadata: PostMetadata[]

  constructor(private http: HttpClient) {
    this.postsMetadata = postMetadataJson;
  }

  getByPath(name: string): PostMetadata {
    for (const post of this.postsMetadata) {
      if (name === post.path) {
        return post;
      }
    }
    throw new Error("Unable to find post in postsJson");
  }

  getArticle(path: string): Observable<string> {
    return this.http.get(`/assets/articles/${path}`, { responseType: 'text' }).pipe(
      catchError((error) => {
        console.error('Error fetching html file for article:', error);
        return throwError(() => new Error(error));
      })
    );
  }
}
