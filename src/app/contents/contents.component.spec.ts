import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contents } from './contents.component';
import { ActivatedRoute } from '@angular/router';

describe('TraditionalBlog', () => {
  let component: Contents;
  let fixture: ComponentFixture<Contents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contents], 
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { url: ['test-route'] } } // TODO: Understand *in depth* why this provider fixes our ActivatedRoute dependency
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contents);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load heading and welcome paragraph', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h2');
    const paragraph = compiled.querySelector('p');

    expect(heading).toBeTruthy();
    expect(heading?.textContent).toContain('Welcome!');
    expect(paragraph).toBeTruthy();
    expect(paragraph?.textContent).toContain('I hope you find something you\'ll enjoy reading!');
  });

  it('should load a complete list of all blogs', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const blogListItems = compiled.querySelectorAll('ul li');

    expect(blogListItems.length).toBeGreaterThan(0);

    const blogLinks = Array.from(blogListItems).map(item => item.querySelector('a'));

    const firstLink = blogLinks.find(link => link?.textContent?.includes('Cape May Beach Day'));
    expect(firstLink).toBeDefined();
    expect(firstLink?.getAttribute('ng-reflect-router-link')).toBe('cape-may-beach-day');

    const secondLink = blogLinks.find(link => link?.textContent?.includes('The Narrows of Zion'));
    expect(secondLink).toBeDefined();
    expect(secondLink?.getAttribute('ng-reflect-router-link')).toBe('the-narrows-of-zion');

    const thirdLink = blogLinks.find(link => link?.textContent?.includes('The Red Rock State'));
    expect(thirdLink).toBeDefined();
    expect(thirdLink?.getAttribute('ng-reflect-router-link')).toBe('the-red-rock-state');
  });
});
