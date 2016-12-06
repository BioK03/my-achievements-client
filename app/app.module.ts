import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from './components/app.component';
import { LoginComponent }   from './components/login/login.component';
import { ToolbarComponent }   from './components/toolbar/toolbar.component';
import { SearchbarComponent }   from './components/searchbar/searchbar.component';
import { LoginbarComponent }   from './components/loginbar/loginbar.component';
import { ProfilelinkComponent }   from './components/profilelink/profilelink.component';
import { ProfiledetailsComponent }   from './components/profiledetails/profiledetails.component';
import { ProfiletabsComponent }   from './components/profiletabs/profiletabs.component';
import { TabdetailsComponent }   from './components/tabdetails/tabdetails.component';
import { AchievementpreviewComponent }   from './components/achievementpreview/achievementpreview.component';
import { AchievementdetailsComponent }   from './components/achievementdetails/achievementdetails.component';

import { ProfileService } from './services/profile/profile-service';
import { ProfileDetailsService } from './services/profiledetails/profiledetails-service';


@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ 
      AppComponent, LoginComponent, ToolbarComponent, SearchbarComponent, LoginbarComponent, ProfilelinkComponent, ProfiledetailsComponent, 
      ProfiletabsComponent, TabdetailsComponent, AchievementpreviewComponent, AchievementpreviewComponent
      
  ],
  bootstrap: [ AppComponent ],
  providers: [ ProfileService, ProfileDetailsService ]
})

export class AppModule { }
