import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Blog } from './blog.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { routes } from './blog.routes';
import { By } from '@angular/platform-browser';
import { Home } from './home/home.component';
import postMetadataJson from "../assets/static-post-metadata.json"
import { PostMetadata } from './article/post.type';
import { DebugElement } from '@angular/core';
import { Article } from './article/article.component';
import { provideHttpClient } from '@angular/common/http';

describe('Blog', () => {
  let router: Router;
  let fixture: ComponentFixture<Blog>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blog, Home, RouterTestingModule.withRoutes(routes)],
      providers: [provideHttpClient()]
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
    fixture = TestBed.createComponent(Blog);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Blog);
    expect(fixture.componentInstance).toBeTruthy();
    expect(fixture.componentInstance).toBeInstanceOf(Blog);
  });

  it('should navigate to /home by default', async () => {
    fixture.detectChanges()
    expect(location.path()).toBe('/home');
  });

  it('should navigate to /home when Home is clicked on navbar', async () => {
    const allLink = fixture.debugElement.queryAll(By.css('a'));
    allLink[0].nativeElement.click();
    expect(location.path()).toBe('/home');
  });

  it('should navigate to /blog when Blog is clicked on navbar', async () => {
    const allLink = fixture.debugElement.queryAll(By.css('a'));
    allLink[1].nativeElement.click();
    expect(location.path()).toBe('/blog');
  });

  it('All articles in static-post-metadata.json should have a working route with inj service', async () => {
    var allPostsMetadata: PostMetadata[] = postMetadataJson;
    for (var postMetadata of allPostsMetadata) {
      await router.navigate(['/blog', postMetadata.path]);
      await fixture.whenStable();
      
      expect(location.path()).toBe(`/blog/${postMetadata.path}`);
      fixture.detectChanges();
      const firstParagraph = fixture.nativeElement.querySelector('p');
      expect(firstParagraph.textContent).toContain(postMetadata.date);
    }
  });
});
