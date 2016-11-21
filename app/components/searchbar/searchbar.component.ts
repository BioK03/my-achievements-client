import { Component } from '@angular/core';
@Component({
  selector: 'searchbar',
  template: `
   <form>
    <input type="text" name="search" placeholder="Recherche..."/><!--
    --><button type="submit"><i class="fa fa-search"></i></button>
   </form>
    `
})
export class SearchbarComponent { }
