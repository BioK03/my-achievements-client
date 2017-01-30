import { Component, Input } from '@angular/core';

import { AchievementList } from '../../classes/achievementListClass';

@Component({
  moduleId: module.id,
  selector: 'tabDetails',
  templateUrl: "tabDetails.component.html"
})

export class TabDetailsComponent {
  @Input() achievementList: AchievementList;
    

 }
