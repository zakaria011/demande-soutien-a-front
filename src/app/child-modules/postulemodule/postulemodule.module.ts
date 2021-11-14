import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostulemoduleRoutingModule } from './postulemodule-routing.module';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DonneesPersonnellesComponent } from './donnees-personnelles/donnees-personnelles.component';
import { DonneesProfesionnellesComponent } from './donnees-profesionnelles/donnees-profesionnelles.component';
import { MissionStageCaseCadreComponent } from './mission-stage-case-cadre/mission-stage-case-cadre.component';
import { MissionStageInfoGeneralesComponent } from './mission-stage-info-generales/mission-stage-info-generales.component';
import { MsInfoGeneralesComponent } from './ms-info-generales/ms-info-generales.component';
import { PostuleComponent } from './postule/postule.component';
import { PostulemoduleComponent } from './postulemodule.component';
import { SoutienComponent } from './soutien/soutien.component';
import { DemandeurInfosComponent } from './demandeur-infos/demandeur-infos.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    PostulemoduleComponent,
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
    CommonModule,
    PostulemoduleRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    BrowserModule,
    
  ]
})
export class PostulemoduleModule { }
