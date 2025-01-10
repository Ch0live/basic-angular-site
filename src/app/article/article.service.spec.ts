import { TestBed } from '@angular/core/testing';
import { ArticleService } from './article.service';
import { HttpClient } from '@angular/common/http';

describe('ArticleService', () => {
  let service: ArticleService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule(
      {
        providers: [ArticleService, { provide: HttpClient, useValue: spy }]
      }
    );
    service = TestBed.inject(ArticleService);
    httpClientSpy = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
