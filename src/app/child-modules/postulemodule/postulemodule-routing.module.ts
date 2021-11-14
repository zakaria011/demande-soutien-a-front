import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonneesPersonnellesComponent } from './donnees-personnelles/donnees-personnelles.component';
import { DonneesProfesionnellesComponent } from './donnees-profesionnelles/donnees-profesionnelles.component';
import { MissionStageCaseCadreComponent } from './mission-stage-case-cadre/mission-stage-case-cadre.component';
import { MissionStageInfoGeneralesComponent } from './mission-stage-info-generales/mission-stage-info-generales.component';
import { MsInfoGeneralesComponent } from './ms-info-generales/ms-info-generales.component';
import { PostuleComponent } from './postule/postule.component';
import { PostulemoduleComponent } from './postulemodule.component';
import { SoutienComponent } from './soutien/soutien.component';

const routes: Routes = [{ path: '', component: PostulemoduleComponent },
{path : 'donneeperso', component : DonneesPersonnellesComponent},
  {path : 'postule', component : PostuleComponent},
  
  {path : 'donneepro', component : DonneesProfesionnellesComponent},
  {path : 'mission-cadre', component : MissionStageCaseCadreComponent},
  {path : 'mission-info', component : MissionStageInfoGeneralesComponent},
  {path : 'manifestation-info', component : MsInfoGeneralesComponent},
  {path : 'soutien', component : SoutienComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostulemoduleRoutingModule { }
