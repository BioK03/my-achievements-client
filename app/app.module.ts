import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from './components/app.component';

import { HomeComponent }   from './components/home/home.component';
import { LoginComponent }   from './components/login/login.component';
import { NavbarComponent }   from './components/navbar/navbar.component';
import { SearchbarComponent }   from './components/searchbar/searchbar.component';
import { ProfileLinkComponent }   from './components/profileLink/profileLink.component';
import { ProfileDetailsComponent }   from './components/profileDetails/profileDetails.component';
import { ProfileTabsComponent }   from './components/profileTabs/profileTabs.component';
import { TabDetailsComponent }   from './components/tabDetails/tabDetails.component';
import { AchievementPreviewComponent }   from './components/achievementPreview/achievementPreview.component';
import { AchievementDetailsComponent }   from './components/achievementDetails/achievementDetails.component';

import { Routing } from './app.routing';

import { LoginService } from './services/loginService';
import { ProfileService } from './services/profileService';
import { ProfileDetailsService } from './services/profileDetailsService';


@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  JsonpModule,
                  Routing ],
  declarations: [ AppComponent,
                  HomeComponent,
                  LoginComponent,
                  NavbarComponent,
                  SearchbarComponent,
                  ProfileLinkComponent,
                  ProfileDetailsComponent,
                  ProfileTabsComponent,
                  TabDetailsComponent,
                  AchievementPreviewComponent,
                  AchievementPreviewComponent ],
  bootstrap: [ AppComponent ],
  providers: [ ProfileService,
               ProfileDetailsService,
               LoginService ]
})

export class AppModule { }
