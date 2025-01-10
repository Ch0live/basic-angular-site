import { TestBed } from '@angular/core/testing';
import { Blog } from './blog.component';
import { ActivatedRoute } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blog],
      providers: [
        {
          provide: ActivatedRoute, 
          useValue: { snapshot: { url: ['test-route'] } }
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Blog);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
