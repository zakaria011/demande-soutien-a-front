import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DemandeurPerso } from '../models/demandeur-perso.model';
import { DemandeurPro } from '../models/demandeur-pro.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeurServiceService {
  private demandeurPerso! : DemandeurPerso;
  private demandeurPro! : DemandeurPro;
  private baseUrlDemandeur = "http://127.0.0.1:8000/api/demandeurs";
  constructor(private httpCLient : HttpClient) { }

  setDemandeurPerso(demandeurPerso : DemandeurPerso){
    this.demandeurPerso = demandeurPerso;
  }
  getDemandeurPerso(){
    return this.demandeurPerso;
  }
  setDemandeurPro(demandeurPro : DemandeurPro){
    this.demandeurPro = demandeurPro;
  }
  getDemandeurPro(){
    return this.demandeurPro;
  }
  addDemandeur() : Observable<Response>{
    console.log("init request");
    let params = new FormData();
    //`${product.Category}`
    params.append('nom',this.getDemandeurPerso().nom);
    params.append('prenom',this.getDemandeurPerso().prenom);
    params.append('email',this.getDemandeurPerso().email);
    params.append('numTel',this.getDemandeurPerso().numTel);
    params.append('responsable_entite',this.getDemandeurPro().responsableEntite);
    params.append('entite_de_recherche',this.getDemandeurPro().entiteDeRecherche);
    params.append('is_professeur',`${this.getDemandeurPro().isEnseignant}`);
    params.append('etablissement',this.getDemandeurPro().etablissement);

    if(!this.getDemandeurPro().isEnseignant){

      params.append('is_officiel',`${this.getDemandeurPro().isSalarie}`);
      params.append('ced',this.getDemandeurPro().ced);
      params.append('annee_these',this.getDemandeurPro().anneeThese);
      params.append('directeur_these',this.getDemandeurPro().directeurThese);
    }else{
      params.append('grade',this.getDemandeurPro().grade);

    }



    return this.httpCLient.post<Response>(this.baseUrlDemandeur,params);
  }
}
