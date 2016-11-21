import { Component } from '@angular/core';
@Component({
  selector: 'toolbar',
  template: `
   <span id="logo">
    <span class="fa fa-graduation-cap"></span>
  </span>
  <span id="logoName">My Achievements</span>

  <searchbar></searchbar>
    `
})
export class ToolbarComponent { }
