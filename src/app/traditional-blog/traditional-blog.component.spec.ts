import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalBlog } from './traditional-blog.component';

describe('TraditionalBlog', () => {
  let component: TraditionalBlog;
  let fixture: ComponentFixture<TraditionalBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraditionalBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraditionalBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
