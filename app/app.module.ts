import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
      AppComponent, LoginComponent, ToolbarComponent, SearchbarComponent, LoginbarComponent, ProfilelinkComponent, ProfiledetailsComponent, 
      ProfiletabsComponent, TabdetailsComponent, AchievementpreviewComponent, AchievementpreviewComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
