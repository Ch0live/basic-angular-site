import { TestBed } from '@angular/core/testing';
import { Blog } from './blog.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blog],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Blog);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render heading', () => {
    const fixture = TestBed.createComponent(Blog);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Heading');
  });

  it('should render paragraph', () => {
    const fixture = TestBed.createComponent(Blog);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Paragraph');
  });
});
