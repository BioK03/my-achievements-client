import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'tabform',
  templateUrl: "tabForm.component.html"
})

export class TabFormComponent { 
  addOrEdit: Boolean = true;

  id: Number = 0;
  name: String = "";
  color: String = "";
  icon: String = "";


  constructor(private route: ActivatedRoute){
    this.route.queryParams.subscribe((params)=> {
      if(params['id']){
        this.addOrEdit = false;
        
      } else {
        
      }
    });
  }

  tabAttempt(){
    
  }
}
