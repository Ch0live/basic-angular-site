import { TestBed } from '@angular/core/testing';
import { BlogContent } from './blog-content.component';

describe('Content', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogContent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BlogContent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'basic-blog' title`, () => {
    const fixture = TestBed.createComponent(BlogContent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('basic-blog');
  });

  it('should render heading', () => {
    const fixture = TestBed.createComponent(BlogContent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Heading');
  });

  it('should render paragraph', () => {
    const fixture = TestBed.createComponent(BlogContent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Paragraph');
  });
});
