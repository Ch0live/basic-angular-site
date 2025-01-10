import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageGrid } from './image-grid.component';

describe('ImageGrid', () => {
  let component: ImageGrid;
  let fixture: ComponentFixture<ImageGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 3 images', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('img').length).toBe(3);
  });

  // it should grow on mouseover

  // it should link straight to the blog article
});
