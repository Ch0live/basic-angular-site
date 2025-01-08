import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBlog } from './button-blog.component';

describe('ButtonBlog', () => {
  let component: ButtonBlog;
  let fixture: ComponentFixture<ButtonBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
