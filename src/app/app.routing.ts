import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { DetailComponent } from './detail/detail.component';
import {  AboutComponent } from './about/about.component';
import { UsersearchComponent  } from './usersearch/usersearch.component';
import { AuthGuardService } from './auth.guard.service';

export const routing = RouterModule.forRoot([
    {path:'',component:DetailComponent},
    {path:'about',component:AboutComponent},
    {path:'search',component:UsersearchComponent, canActivate:[AuthGuardService]},
    {path:"**", component:DetailComponent}
]);

