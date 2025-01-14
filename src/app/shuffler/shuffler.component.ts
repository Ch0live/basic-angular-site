import { Component } from '@angular/core';

@Component({
  selector: 'blog-shuffler',
  imports: [],
  templateUrl: './shuffler.component.html',
  styleUrl: './shuffler.component.css'
})
export class ShufflerComponent {
  diceSrc = "/assets/svg/dice/dice-frame-1.svg"

  diceRoll() { 
    throw new Error('Dice unable to roll');
  }
}
