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

  constructor(private searchService: SearchService) {
    this.search = require('../../../dist/scripts/all.js');
    console.log(this.search);
    new this.search();
  }

  searchResults() {
    this.searchService.getSearchResults(this.words).subscribe(
      res => {
        this.profiles = res;
        console.log(res);
      }
    );
  }
 }
