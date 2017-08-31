import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { RolesModule } from './components/roles/roles.module';
import { UsersModule } from './components/users/users.module';
import { LoginComponent } from './components/login-component/login.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpModule } from '@angular/http';
import {LoginGuard,LoginService} from './services/all-services';
import { fakeBackendProvider } from './core/fake-back'
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { RegisterComponent } from './components/register-component/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,

    UsersModule,
    RolesModule,
    HttpModule,

    AppRoutingModule
  ],
  providers: [CookieService,LoginGuard, 
    fakeBackendProvider,
    LoginService,
    MockBackend,
    BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
