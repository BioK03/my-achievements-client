import { Component } from '@angular/core';

import { ProfileDetailsService } from '../services/profileDetailsService/profileDetailsService';
import { ProfileService } from '../services/profileService/profileService';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: "app.component.html",
  providers: [ ProfileDetailsService, ProfileService ]
})

export class AppComponent { }

