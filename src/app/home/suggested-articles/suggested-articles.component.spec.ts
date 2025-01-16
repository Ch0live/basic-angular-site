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

  it('should have alt text, src and content for all grid images', () => {
    const gridDe: DebugElement = fixture.debugElement.query(By.css('.grid'));
    const images: HTMLImageElement[] = gridDe.nativeElement.querySelectorAll('img'); // TODO: Add in types here (HTMLImageElement[]), couldn't get it to work earlier
    expect(images.length).toBe(3);

    images.forEach( (image) => {
      expect(image.tagName).toBe('IMG');
      expect(image.src).toBeTruthy;
      expect(image.alt).toBeTruthy;
      expect(image.textContent).toBeTruthy;
    })
  });

  // TODO: 
  // - Add extensive testing of shuffling button logic 
  // - Adjust shuffle so same post doesn't reappear (until all posts have been shown...?)
  // - Consider migrating logic to a service?

  it('should render a dice svg', () => {
    const diceContainerDe: DebugElement = fixture.debugElement.query(By.css('.dice-container'));
    const images: HTMLImageElement[] = diceContainerDe.nativeElement.querySelectorAll('img');
    expect(images.length).toBe(1);
    const diceImage = images[0];
    expect(diceImage.src).toBe("http://localhost/assets/svg/dice/dice-frame-1.svg");
    expect(diceImage.alt).toBe("A dice icon");
  });

  it('should onClick call shuffleArticles', () => {
    const component = fixture.componentInstance;
    const spy = jest.spyOn(component, 'shuffleArticles');
    const diceImg = fixture.debugElement.query(By.css('.dice'));
    diceImg.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  });
  
});
