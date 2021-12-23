import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PostuleComponent } from './components/postule/postule.component';
import { DonneesPersonnellesComponent } from './components/donnees-personnelles/donnees-personnelles.component';
import { DonneesProfesionnellesComponent } from './components/donnees-profesionnelles/donnees-profesionnelles.component';
import { MsInfoGeneralesComponent } from './components/ms-info-generales/ms-info-generales.component';
import { MissionStageCaseCadreComponent } from './components/mission-stage-case-cadre/mission-stage-case-cadre.component';
import { SoutienComponent } from './components/soutien/soutien.component';
import { MissionStageInfoGeneralesComponent } from './components/mission-stage-info-generales/mission-stage-info-generales.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DonneeProDoctorantComponent } from './components/donnee-pro-doctorant/donnee-pro-doctorant.component';
import { DonneeProEnseignantComponent } from './components/donnee-pro-enseignant/donnee-pro-enseignant.component';
import { ChoosePostuleComponent } from './components/choose-postule/choose-postule.component';
import { HttpClientModule } from '@angular/common/http';
import { HistoriquesComponent } from './components/historiques/historiques.component';
import { DemandesComponent } from './components/demandes/demandes.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DonneesPersonnellesComponent,
    DonneesProfesionnellesComponent,
    MsInfoGeneralesComponent,
    MissionStageCaseCadreComponent,
    PostuleComponent,
    SoutienComponent,
    MissionStageInfoGeneralesComponent,
    FooterComponent,
    ContactComponent,
    SignupComponent,
    SigninComponent,
    DonneeProDoctorantComponent,
    DonneeProEnseignantComponent,
    ChoosePostuleComponent,
    HistoriquesComponent,
    DemandesComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  providers: [ CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
