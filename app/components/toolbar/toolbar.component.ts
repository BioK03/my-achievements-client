import { Component } from '@angular/core';
@Component({
  selector: 'toolbar',
  template: `
   <div>
     <span id="logo">
      <span class="fa fa-graduation-cap"></span>
    </span>
    <span id="logoName">MY<span>ACHIEVEMENTS</span></span>
   </div>
   <div>
    <searchbar></searchbar>
   </div>
   <div>

   </div>
  

  
    `
})
export class ToolbarComponent { }
