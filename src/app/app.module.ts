import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HelloComponent } from './components/hello/hello.component';
import { PostuleComponent } from './components/postule/postule.component';
import { DonneesPersonnellesComponent } from './components/donnees-personnelles/donnees-personnelles.component';
import { DonneesProfesionnellesComponent } from './components/donnees-profesionnelles/donnees-profesionnelles.component';
import { DemandeurInfosComponent } from './components/demandeur-infos/demandeur-infos.component';
import { MsInfoGeneralesComponent } from './components/ms-info-generales/ms-info-generales.component';
import { MissionStageCaseCadreComponent } from './components/mission-stage-case-cadre/mission-stage-case-cadre.component';
import { SoutienComponent } from './components/soutien/soutien.component';
import { MissionStageInfoGeneralesComponent } from './components/mission-stage-info-generales/mission-stage-info-generales.component';


@NgModule({
  declarations: [
    AppComponent,
 
    HeaderComponent,
   
    HomeComponent,
    AboutComponent,
    HelloComponent,

    
    DonneesPersonnellesComponent,
    DonneesProfesionnellesComponent,
    DemandeurInfosComponent,
    MsInfoGeneralesComponent,
    MissionStageCaseCadreComponent,
    PostuleComponent,
    SoutienComponent,
    MissionStageInfoGeneralesComponent


   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    ClarityModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
