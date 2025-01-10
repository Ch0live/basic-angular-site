import {Component, computed, input} from '@angular/core';
@Component({
  selector: 'blog-slider',
  imports: [],
  template: `
    <div>
      <p>
        {{ value() }}
      </p>
      <p>
        {{ valueWithDefault() }}
      </p>
    </div>
  `,
  styleUrl: 'blog-slider.component.css'
})
export class BlogSlider {

  // Declare an input named 'value' with a default value of zero. 
  value = input.required<number>();
  valueWithDefault = input(-1);

  // Create a computed expression that reads the value input
  label = computed(() => `The slider's value is ${this.value()}`); 
  
}
