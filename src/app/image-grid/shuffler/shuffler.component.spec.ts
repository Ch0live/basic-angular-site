import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShufflerComponent } from './shuffler.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

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

  it('should onClick call diceRoll', () => {
    jest.spyOn(component, 'diceRoll');
    const shufflerButtonDe: DebugElement = fixture.debugElement.query(By.css('button'));
    shufflerButtonDe.triggerEventHandler('click');
    expect(component.diceRoll).toHaveBeenCalled();
  });
});
