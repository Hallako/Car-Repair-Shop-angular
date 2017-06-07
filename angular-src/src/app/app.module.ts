import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CalendarComponent } from 'angular2-fullcalendar/src/calendar/calendar';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { User } from './components/admin/user';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { SearchService } from './services/search.service';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard'
import { LoginGuard } from './guards/login.guard'




const appRoutes : Routes = [
    {path:'', component: HomeComponent},
    {path:'register', component: RegisterComponent, canActivate:[LoginGuard]},
    {path:'login', component: LoginComponent, canActivate:[LoginGuard]},
    {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
    {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
    {path: 'admin', component: AdminComponent, canActivate:[AdminGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    ProfileComponent,
    CalendarComponent,
    FooterComponent,
    AdminComponent,
  ],

  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    BrowserAnimationsModule,
  ],
  providers: [ValidateService, AuthService, AuthGuard, AdminGuard, SearchService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
