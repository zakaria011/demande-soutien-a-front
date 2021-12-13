import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadre } from '../models/cadre.model';
import { MissionGenerale } from '../models/mission-generale.model';
import { Response } from '../models/response.model';
import { Soutien } from '../models/soutien.model';
import { DemandeurServiceService } from './demandeur-service.service';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private missionGenerale! : MissionGenerale;
  private cadre! : Cadre;
  private soutien! : Soutien;

  private baseUrlDemandeur = "http://127.0.0.1:8000/api/demandes";

  constructor(private httpCLient : HttpClient, private demandeurService : DemandeurServiceService) { }



  getMissionGenerale() {
    return this.missionGenerale;
  }

  getCadre()  {
    return this.cadre;
  }

  getSoutien() {
    return this.soutien;
  }


  setMissionGenerale( missionGenerale : MissionGenerale){
    this.missionGenerale = missionGenerale;
  }

  setCadre(cadre : Cadre){
    this.cadre = cadre;
  }

  setSoutien(soutien : Soutien){
    this.soutien = soutien;
  }
  addMission() : Observable<Response>{
    console.log("init request");
    let params = new FormData();
    params.append('intitule',this.getMissionGenerale().objetMission);
    params.append('intitule_projet',this.getCadre().intituleProjet);
    params.append('respo_marocain',this.getCadre().responsableMarocain);
    params.append('respo_etranger',this.getCadre().partenaireEtranger);
    params.append('cadre',this.getCadre().cadre);
    params.append('is_rem',`${this.getCadre().isFinance}`);
    params.append('pays',this.getMissionGenerale().pays);
    params.append('ville',this.getMissionGenerale().ville);
    let dateDebut = this.getMissionGenerale().dateDebut.toString();
    let dateFin =this.getMissionGenerale().dateFin.toString();
    let dateDepart = this.getMissionGenerale().dateDepart.toString();
    let dateRetour = this.getMissionGenerale().dateRetour.toString();
    params.append('date_debut',dateDebut);
    params.append('date_fin',dateFin);
    params.append('date_depart',dateDepart);
    params.append('date_retour',dateRetour);
    params.append('is_mission',`${1}`);
    params.append('demandeur_id',`${this.demandeurService.getDemandeurId()}`);

    params.append('is_beneficie',`${this.getSoutien().isBeneficie}`);
    params.append('montant_soutien_precedent',`${this.getSoutien().montant}`);
    params.append('type',`${this.getSoutien().isSoutienTotal}`);
    params.append('montantHeberegement',`${this.getSoutien().montantHeberegement}`);
    params.append('montantInscription',`${this.getSoutien().montantInscription}`);
    params.append('montantTransport',`${this.getSoutien().montantTransport}`);
    params.append('autreMontant',`${this.getSoutien().autreMontant}`);
    return this.httpCLient.post<Response>(this.baseUrlDemandeur,params);
  }

}
