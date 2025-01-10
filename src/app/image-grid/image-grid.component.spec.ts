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
    const images = compiled.querySelectorAll('img');
    expect(images.length).toBe(3);
    
    const capeMayImage = images[0];
    expect(capeMayImage.tagName).toBe('IMG');
    expect(capeMayImage.src).toBe('http://localhost/assets/img/cape-may-beach-day/Image.png');
    expect(capeMayImage.alt).toBe('Wildwood Crest Beach');
    
    const zionImage = images[1];
    expect(zionImage.tagName).toBe('IMG');
    expect(zionImage.src).toBe('http://localhost/assets/img/the-narrows-of-zion/IMG_3473.jpeg');
    expect(zionImage.alt).toBe('Oderville Gulch in Zion National Park');
    
    const coloradoImage = images[2];
    expect(coloradoImage.tagName).toBe('IMG');
    expect(coloradoImage.src).toBe('http://localhost/assets/img/the-red-rock-state/IMG_2724.jpeg');
    expect(coloradoImage.alt).toBe('An Elk in Rocky Mountain National Park');
  });

  // it should grow on mouseover

  // it should link straight to the blog article

});
