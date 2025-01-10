import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { Article } from './article.component';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from './article.service';
import { of } from 'rxjs';

describe('Article', () => {
  let component: Article;
  let fixture: ComponentFixture<Article>;

  beforeEach(async () => {
    await TestBed
    .configureTestingModule({
      imports: [Article], 
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        {
          provide: ActivatedRoute, 
          useValue: { snapshot: { url: ['test-route'] } }
        },
        {
          provide: ArticleService,
          useValue: {
            getByPath: jest.fn().mockReturnValue({
               path: 'test-route', date: 'test-str-date' 
            }),
            getArticle: jest.fn().mockReturnValue(of('<p>test-html-content</p>'))
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Article);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the HTML content returned by getArticle', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.innerHTML).toContain('test-html-content');
  });

  it('should display the date returned by getByPath', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.innerHTML).toContain('test-str-date');
  });
});
