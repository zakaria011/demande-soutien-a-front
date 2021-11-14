import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DonneesPersonnellesComponent } from './components/donnees-personnelles/donnees-personnelles.component';
import { PostuleComponent } from './components/postule/postule.component';
import { AboutComponent } from './components/about/about.component';

import { DonneesProfesionnellesComponent } from './components/donnees-profesionnelles/donnees-profesionnelles.component';
import { MissionStageCaseCadreComponent } from './components/mission-stage-case-cadre/mission-stage-case-cadre.component';
import { MissionStageInfoGeneralesComponent } from './components/mission-stage-info-generales/mission-stage-info-generales.component';
import { MsInfoGeneralesComponent } from './components/ms-info-generales/ms-info-generales.component';
import { SoutienComponent } from './components/soutien/soutien.component';


const ROUTES : Routes = [ 
  {path : 'about', component : AboutComponent},
  {path : 'postule', component : PostuleComponent,
  children : [
  {path : 'donneeperso', component : DonneesPersonnellesComponent, outlet: 'forms'},
  
 
  {path : 'donneepro', component : DonneesProfesionnellesComponent ,outlet: 'forms'},
  {path : 'mission-cadre', component : MissionStageCaseCadreComponent ,outlet: 'forms'},
  {path : 'mission-info', component : MissionStageInfoGeneralesComponent ,outlet: 'forms'},
  {path : 'manifestation-info', component : MsInfoGeneralesComponent ,outlet: 'forms'},
  {path : 'soutien', component : SoutienComponent,outlet: 'forms'}
  ]},
  { path: 'postulemodule', loadChildren: () => import('./child-modules/postulemodule/postulemodule.module').then(m => m.PostulemoduleModule) }


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

  
  