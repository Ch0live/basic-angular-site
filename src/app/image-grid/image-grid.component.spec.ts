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
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 3 images', () => {
    const images = fixture.nativeElement.querySelectorAll('img');
    expect(images.length).toBe(3);
    
    const capeMayImage = images[0];
    expect(capeMayImage.tagName).toBe('IMG');
    expect(capeMayImage.src).toBe('http://localhost/assets/img/cape-may-beach-day/Image.png');
    
    const zionImage = images[1];
    expect(zionImage.tagName).toBe('IMG');
    expect(zionImage.src).toBe('http://localhost/assets/img/the-narrows-of-zion/IMG_3473.jpeg');
    
    const coloradoImage = images[2];
    expect(coloradoImage.tagName).toBe('IMG');
    expect(coloradoImage.src).toBe('http://localhost/assets/img/the-red-rock-state/IMG_2724.jpeg');
  });

  it('should have alt text for all images', () => {
    const images = fixture.nativeElement.querySelectorAll('img');
    expect(images.length).toBe(3);
    
    const capeMayImage = images[0];
    expect(capeMayImage.tagName).toBe('IMG');
    expect(capeMayImage.alt).toBe('Wildwood Crest Beach');
    
    const zionImage = images[1];
    expect(zionImage.tagName).toBe('IMG');
    expect(zionImage.alt).toBe('Oderville Gulch in Zion National Park');
    
    const coloradoImage = images[2];
    expect(coloradoImage.tagName).toBe('IMG');
    expect(coloradoImage.alt).toBe('An Elk in Rocky Mountain National Park');
  });

  it('should link to blog article', async () => {
    const images = fixture.nativeElement.querySelectorAll('img');
    expect(images.length).toBe(3);

    const capeMayImage: HTMLElement = images[0];
    expect(capeMayImage.querySelector('h2')).toBeFalsy();

    capeMayImage.dispatchEvent(new MouseEvent('onmouseover')); 
    await fixture.whenStable(); // TODO: Check if I need this fixture.whenstable line

    expect(capeMayImage.querySelector('h2')).toBe("Cape May Beach Day");
  });

  // it should grow on mouseover

  // it should link straight to the blog article

  // it should overlay the blog title

});
