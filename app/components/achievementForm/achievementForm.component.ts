import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'achievementform',
  templateUrl: "achievementForm.component.html"
})

export class AchievementFormComponent { 
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

  achievementAttempt(){
    
  }
}
