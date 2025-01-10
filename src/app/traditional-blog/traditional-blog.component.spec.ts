import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalBlog } from './traditional-blog.component';
import { ActivatedRoute } from '@angular/router';

describe('TraditionalBlog', () => {
  let component: TraditionalBlog;
  let fixture: ComponentFixture<TraditionalBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraditionalBlog], 
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { url: ['test-route'] } } // TODO: Understand why this provider fixes our ActivatedRoute dependency
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraditionalBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load heading and welcome paragraph', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h')?.innerHTML).toContain('Welcome!');
    expect(compiled.querySelector('p')?.innerHTML).toContain('I hope you find something you\'ll enjoy reading!');
  });

  it('should load a complete list of all blogs', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('ul')?.innerHTML).toContain('Cape May Beach Day');
    expect(compiled.querySelector('ul')?.innerHTML).toContain('The Narrows in Zion');
    expect(compiled.querySelector('ul')?.innerHTML).toContain('The Red Rock State');
  });
});
