import { Component } from '@angular/core';

@Component({
  selector: 'blog-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  magnifyingGlassSrc = "/assets/svg/magnifying-glass.svg";

  printContentOfSearch() {
    console.log("You submitted the search!");
  }
}
