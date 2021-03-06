import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DonneesPersonnellesComponent } from './components/donnees-personnelles/donnees-personnelles.component';
import { PostuleComponent } from './components/postule/postule.component';

import { DonneesProfesionnellesComponent } from './components/donnees-profesionnelles/donnees-profesionnelles.component';
import { MissionStageCaseCadreComponent } from './components/mission-stage-case-cadre/mission-stage-case-cadre.component';
import { MissionStageInfoGeneralesComponent } from './components/mission-stage-info-generales/mission-stage-info-generales.component';
import { MsInfoGeneralesComponent } from './components/ms-info-generales/ms-info-generales.component';
import { SoutienComponent } from './components/soutien/soutien.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ChoosePostuleComponent } from './components/choose-postule/choose-postule.component';
import { HistoriquesComponent } from './components/historiques/historiques.component';
import { DemandeComponent } from './child-modules/demande/demande.component';
import { AuthGuard } from './auth.guard';
import { PiecesJointesComponent } from './components/pieces-jointes/pieces-jointes.component';


const ROUTES : Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'signin', component : SigninComponent},
  {path : 'historiques', component : HistoriquesComponent},
  {path : 'choosepostule', component : ChoosePostuleComponent},
  {path : 'demandes', component : DemandeComponent},
  {path : 'postule/:type', component : PostuleComponent, canActivate : [AuthGuard],
  children : [
  {path : 'donneeperso', component : DonneesPersonnellesComponent, outlet: 'forms'},



  {path : 'donneepro', component : DonneesProfesionnellesComponent ,outlet: 'forms'},
  {path : 'mission-cadre', component : MissionStageCaseCadreComponent ,outlet: 'forms'},
  {path : 'mission-info', component : MissionStageInfoGeneralesComponent ,outlet: 'forms'},
  {path : 'manifestation-info', component : MsInfoGeneralesComponent ,outlet: 'forms'},
  {path : 'soutien', component : SoutienComponent,outlet: 'forms'},
  {path : 'piecesjointes', component : PiecesJointesComponent,outlet: 'forms'}
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


