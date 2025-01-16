import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Blog } from './blog.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { routes } from './blog.routes';

describe('Blog', () => {
  let router: Router;
  let fixture: ComponentFixture<Blog>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blog, RouterTestingModule.withRoutes(routes)],
      providers: []
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
    fixture = TestBed.createComponent(Blog);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Blog);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should navigate to /home by default', () => {
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(location.path).toBe('/home');
    });
  });

});
