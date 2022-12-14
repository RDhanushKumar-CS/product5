import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import * as $ from 'jquery';
import { VolunteerProfileComponent } from './volunteer-profile/volunteer-profile.component';
import { PatientComponentComponent } from './patient-component/patient-component.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { medicineComponent } from './medicine/medicine.component';
import { VolunteerComponent } from './medicine/volunteer/volunteer.component';
import { UpdateComponent } from './medicine/volunteer/update/update.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './consultation/patient/patient.component';
import { AddnewComponent } from './medicine/volunteer/addnew/addnew.component';
import { SearchPipe } from './search.pipe';

import { VolunteerDisplayComponent } from './volunteer-profile/volunteer-display/volunteer-display.component';

import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { PatientDisplayComponent } from './patient-display/patient-display.component';
import { DoctorDisplayComponent } from './doctor-display/doctor-display.component';
import { NavBarComponent } from './navBar/navBarcomponent';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    PatientComponent,
    medicineComponent,
    VolunteerComponent,
    UpdateComponent,
    VolunteerProfileComponent,
    HomeComponent,
    PatientComponentComponent,
    AddnewComponent,
    SearchPipe,
    VolunteerDisplayComponent,
    DoctorProfileComponent,
    PatientDisplayComponent,
    DoctorDisplayComponent,
    NavBarComponent,
    LandingPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule, HttpClient,LoginComponentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
