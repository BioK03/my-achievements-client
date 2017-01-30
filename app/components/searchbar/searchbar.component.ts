import { Component } from '@angular/core';

import { SearchService } from '../../services/searchService';

@Component({
  moduleId: module.id,
  selector: 'searchbar',
  templateUrl: "searchBar.component.html"
})

export class SearchbarComponent {
  words: string = "";
  

  constructor(private searchService: SearchService) {

  }

  searchResults() {
    this.searchService.getSearchResults(this.words).subscribe(
      res => {
        console.log(res);
      }
    );
  }
 }
