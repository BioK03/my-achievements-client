import { Component, Input } from '@angular/core';

import { Profile } from '../../classes/profileClass';

@Component({
  moduleId: module.id,
  selector: 'profileTabs',
  templateUrl: "profileTabs.component.html"
})

export class ProfileTabsComponent {
  @Input() user: Profile;

  

 }
