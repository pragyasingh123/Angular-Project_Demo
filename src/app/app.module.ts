import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AngularMaterialModule } from './material/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {httpInterceptorProviders} from './utility/http-interceptors/interceptors-provider';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PowerOf2Pipe } from './Pipes/power-of2.pipe';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RegistrationComponent,
    NavigationComponent,
    UsersComponent,
    PageNotFoundComponent,
    PowerOf2Pipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    
    AngularMaterialModule,
    FormsModule,
    
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClientModule,httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
