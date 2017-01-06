import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileDetailsComponent} from './components/profileDetails/profileDetails.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login/:userId',
        component: LoginComponent
    },
    {
        path: 'profile/:userId',
        component: ProfileDetailsComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);