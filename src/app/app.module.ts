import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { LoginComponent } from './components/login-component/login.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpModule } from '@angular/http';
import {LoginGuard} from './services/all-services';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,

    UsersModule,
    RolesModule,
    HttpModule,

    AppRoutingModule
  ],
  providers: [CookieService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
