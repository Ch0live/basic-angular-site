import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuggestedArticles } from './suggested-articles.component';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import postMetadataJson from './test-post-metadata.json'
import { DebugElement } from '@angular/core';
import { PostMetadataInputWrapper } from 'src/app/article/post.type';

describe('SuggestedArticles', () => {
  let fixture: ComponentFixture<SuggestedArticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestedArticles], 
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { url: ['test-route'] } }
        }
      ]
    })
    .compileComponents();

    // Create fixture
    fixture = TestBed.createComponent(SuggestedArticles);

    // Bind test data to component
    const metadataFromJson: PostMetadataInputWrapper = { metadata: postMetadataJson };
    fixture.componentRef.setInput('postMetadata', metadataFromJson);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render blog-shuffler', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('blog-shuffler')).toBeTruthy();
  });

  it('should render 3 images', () => {
    const suggestedArticlesDe: DebugElement = fixture.debugElement.query(By.css('.grid'));
    const images = suggestedArticlesDe.nativeElement.querySelectorAll('img');;
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

  it('should have alt text for all contained images', () => {
    const suggestedArticlesDe: DebugElement = fixture.debugElement.query(By.css('.grid'));
    const images = suggestedArticlesDe.nativeElement.querySelectorAll('img'); // TODO: Add in types here (HTMLImageElement[]), couldn't get it to work earlier
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

  it('should have blog title overlaid on all images', () => {
    const images = fixture.nativeElement.querySelectorAll('h2');
    expect(images.length).toBe(3);
    
    const capeMayImage = images[0];
    expect(capeMayImage.textContent).toBe('Cape May Beach Day');
    
    const zionImage = images[1];
    expect(zionImage.textContent).toBe('The Narrows of Zion');
    
    const coloradoImage = images[2];
    expect(coloradoImage.textContent).toBe('The Red Rock State');
  });

  // TODO: Add extensive testing of shuffling button logic (maybe move it all to a service?)
  
});
