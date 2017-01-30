import { Component, Input } from '@angular/core';

import { Achievement } from '../../classes/achievementClass';

@Component({
  moduleId: module.id,
  selector: 'achievementpreview',
  templateUrl: "achievementPreview.component.html"
})

export class AchievementPreviewComponent {
  @Input() achievement: Achievement;
 }
