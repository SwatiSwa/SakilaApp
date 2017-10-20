import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [{
    path: 'login',
    component: LoginComponent
},{
    path: 'home',
    component: HomeComponent
},{
    path      : 'about',
    component : AboutComponent
},{
    path       : '',
    redirectTo : '/login',
    pathMatch  : 'full'    
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);