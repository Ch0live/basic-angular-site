import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShufflerComponent } from './shuffler.component';

describe('ShufflerComponent', () => {
  let component: ShufflerComponent;
  let fixture: ComponentFixture<ShufflerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShufflerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShufflerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
