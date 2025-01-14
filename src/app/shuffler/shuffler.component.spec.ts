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

  it('should render a dice svg', () => {
    expect(fixture.nativeElement.querySelectorAll('img')).toBeTruthy();
    const images: HTMLImageElement[] = fixture.nativeElement.querySelectorAll('img');
    expect(images.length).toBe(1);
    const diceImage = images[0];
    expect(diceImage.src).toBe("http://localhost/assets/svg/dice/dice-frame-1.svg");
    expect(diceImage.alt).toBe("A dice icon");
  });
});
