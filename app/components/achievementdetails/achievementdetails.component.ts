import { Component, Input } from '@angular/core';

import { Achievement } from '../../classes/achievementClass';

@Component({
  moduleId: module.id,
  selector: 'achievementdetails',
  templateUrl: "achievementDetails.component.html"
})

export class AchievementDetailsComponent { 
  @Input() achievement: Achievement;
}


