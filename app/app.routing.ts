import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileDetailsComponent } from './components/profileDetails/profileDetails.component';
import { EditAchievementsComponent } from './components/editAchievements/editAchievements.component';
import { EditTabsComponent } from './components/editTabs/editTabs.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'profile',
        component: ProfileDetailsComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'edittabs',
        component: EditTabsComponent
    },
    {
        path: 'editachievements',
        component: EditAchievementsComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);