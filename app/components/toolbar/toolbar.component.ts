import { Component } from '@angular/core';
import { Http, HttpModule } from '@angular/http';

@Component({
  selector: 'toolbar',
  template: `
   <div>
     <span id="logo">
      <span class="fa fa-graduation-cap"></span>
    </span>
    <span id="logoName">MY<span>ACHIEVEMENTS</span></span>
   </div><!--
   --><div>
    <searchbar></searchbar>
   </div><!--
   --><div>
    <profilelink></profilelink>
   </div>
  

  
    `
})

export class ToolbarComponent { }
