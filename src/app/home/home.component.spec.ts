import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home } from './home.component';
import { ActivatedRoute } from '@angular/router';

describe('Home', () => {
  let component: Home;
    let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
        imports: [Home], 
        providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { url: ['test-route'] } }
        }
      ]
    })
    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Hello there');
  });

  it('should render paragraph', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Welcome to this corner of the internet. This is a blog with some other experimental pages.');
  });

  it('should render blog-suggested-articles', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('blog-suggested-articles')).toBeTruthy();
  });
});
