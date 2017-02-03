import { Component } from '@angular/core';

import { SearchService } from '../../services/searchService/searchService';

@Component({
  moduleId: module.id,
  selector: 'searchbar',
  templateUrl: "searchBar.component.html"
})



export class SearchbarComponent {
  words: string = "";
  profiles;
  search;
  resultsShown: Boolean = true;


  constructor(private searchService: SearchService) {
    
  }

  setResultsShown(value){
    setTimeout(() => {
      this.resultsShown = value;
    }, 500);
    
  }

  searchResults() {
    setTimeout(() => {
      this.resultsShown = true;
    }, 600);
    this.searchService.getSearchResults(this.words).subscribe(
      res => {
        this.profiles = res;
      }
    );
  }
 }
