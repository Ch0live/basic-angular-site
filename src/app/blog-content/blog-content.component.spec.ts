import { TestBed } from '@angular/core/testing';
import { Content } from './blog-content.component';

describe('Content', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Content],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Content);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'basic-blog' title`, () => {
    const fixture = TestBed.createComponent(Content);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('basic-blog');
  });

  it('should render heading', () => {
    const fixture = TestBed.createComponent(Content);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Heading');
  });

  it('should render paragraph', () => {
    const fixture = TestBed.createComponent(Content);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Paragraph');
  });
});
