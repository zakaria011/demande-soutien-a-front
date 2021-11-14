import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandeRoutingModule } from './demande-routing.module';
import { DemandeComponent } from './demande.component';
import { PostuleComponent } from './postule/postule.component';
import { ClarityModule } from '@clr/angular';
import { DonneePersoComponent } from './donnee-perso/donnee-perso.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    DemandeComponent,
    PostuleComponent,
    DonneePersoComponent
  ],
  imports: [
    CommonModule,
    DemandeRoutingModule,
    ClarityModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class DemandeModule { }
