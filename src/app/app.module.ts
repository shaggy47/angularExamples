import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserServiceService } from './user-service.service';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about/about.component';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { routing } from './app.routing';
import { AuthGuardService } from './auth.guard.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    DetailComponent,
    AboutComponent,
    UsersearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    UserServiceService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
