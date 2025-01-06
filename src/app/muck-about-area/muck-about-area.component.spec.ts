import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuckAboutAreaComponent } from './muck-about-area.component';

describe('MuckAboutAreaComponent', () => {
  let component: MuckAboutAreaComponent;
  let fixture: ComponentFixture<MuckAboutAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuckAboutAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuckAboutAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
