import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ArticleService } from './article.service';
import { staticPostList } from '../content/list-of-static-posts.json';
import { HttpClient } from '@angular/common/http';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        providers: [HttpClient]
      }
    )
    service = TestBed.inject(ArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should have postsMetadata initialized', () => {
  //   expect(service.postsMetadata).toEqual(staticPostList);
  // });

  // it('should return a post by path', () => {
  //   const postPath = staticPostList[0].path;
  //   const post = service.getByPath(postPath);
  //   expect(post).toEqual(staticPostList[0]);
  // });

  // it('should throw an error if post is not found by path', () => {
  //   expect(() => service.getByPath('non-existent-path')).toThrowError('Unable to find post in postsJson');
  // });

  // it('should fetch article content', () => {
  //   const dummyArticle = '<h1>Test Article</h1>';
  //   const path = 'test-article.html';

  //   service.getArticle(path).subscribe(content => {
  //     expect(content).toBe(dummyArticle);
  //   });

  //   const req = httpMock.expectOne(`/assets/articles/${path}`);
  //   expect(req.request.method).toBe('GET');
  //   req.flush(dummyArticle);
  // });

  // it('should handle error when fetching article content', () => {
  //   const path = 'test-article.html';

  //   service.getArticle(path).subscribe(
  //     () => fail('should have failed with an error'),
  //     (error) => {
  //       expect(error.message).toContain('Error fetching html file for article:');
  //     }
  //   );

  //   const req = httpMock.expectOne(`/assets/articles/${path}`);
  //   req.flush('Error fetching html file for article', { status: 500, statusText: 'Server Error' });
  // });
});
