import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Blog } from './blog.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { routes } from './blog.routes';
import { By } from '@angular/platform-browser';
import { Home } from './home/home.component';
import { TraditionalBlog } from './traditional-blog/traditional-blog.component';

describe('Blog', () => {
  let router: Router;
  let blogFixture: ComponentFixture<Blog>;
  let homeFixture: ComponentFixture<Home>;
  let infoFixture: ComponentFixture<Home>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blog, Home, RouterTestingModule.withRoutes(routes)],
      providers: []
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
    blogFixture = TestBed.createComponent(Blog);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Blog);
    expect(fixture.componentInstance).toBeTruthy();
    expect(fixture.componentInstance).toBeInstanceOf(Blog);
  });

  it('should navigate to /home by default', async () => {
    blogFixture.detectChanges()
    expect(location.path()).toBe('/home');
  });

  it('should navigate to /home when Home is clicked on navbar', async () => {
    const allLink = blogFixture.debugElement.queryAll(By.css('a'));
    allLink[0].nativeElement.click();
    expect(location.path()).toBe('/home');
  });

  it('should navigate to /blog when Blog is clicked on navbar', async () => {
    const allLink = blogFixture.debugElement.queryAll(By.css('a'));
    allLink[1].nativeElement.click();
    expect(location.path()).toBe('/blog');
  });

  // TODO: Check all dates in static-post-metadata.json

  // it('should navigate to any static blog if present', async () => {
    
  // });
});
