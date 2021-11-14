import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeComponent } from './demande.component';
import { DonneePersoComponent } from './donnee-perso/donnee-perso.component';
import { PostuleComponent } from './postule/postule.component';

const routes: Routes = [{path: '', component: DemandeComponent},
  { path: 'postule', component: PostuleComponent,
    children: [
      { path: 'donneeperso', component: DonneePersoComponent, outlet: 'forms' }
    ]
},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeRoutingModule { }
 