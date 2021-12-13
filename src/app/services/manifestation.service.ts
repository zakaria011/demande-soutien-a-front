import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manifestation } from '../models/manifestation.model';
import { Response } from '../models/response.model';
import { Soutien } from '../models/soutien.model';
import { DemandeurServiceService } from './demandeur-service.service';

@Injectable({
  providedIn: 'root'
})
export class ManifestationService {
  private soutien! : Soutien;
  private manifestation! : Manifestation;
  private baseUrlDemande = "http://127.0.0.1:8000/api/demandes";
  constructor(private httpCLient : HttpClient,private demandeurService : DemandeurServiceService) { }

  getManifestation(){
    return this.manifestation;
  }
  getSoutien(){
    return this.soutien;
  }
  setManifestation(manifestation : Manifestation){
    this.manifestation = manifestation;
  }

  setSoutien(soutien : Soutien){
    this.soutien = soutien;
  }
  addManifestation() : Observable<Response>{
    console.log("init request");
    let params = new FormData();
    //info sur la manifestation
    params.append('intitule',this.getManifestation().intituleManifestation);
    params.append('intitule_participation',this.getManifestation().intituleParticipation);
    params.append('nature_participation',this.getManifestation().natureParticipation);
    params.append('pays',this.getManifestation().pays);
    params.append('ville',this.getManifestation().ville);
    let dateDebut = this.getManifestation().dateDebut.toString();
    let dateFin =this.getManifestation().dateFin.toString();
    let dateDepart = this.getManifestation().dateDepart.toString();
    let dateRetour = this.getManifestation().dateRetour.toString();
    params.append('date_debut',dateDebut);
    params.append('date_fin',dateFin);
    params.append('date_depart',dateDepart);
    params.append('date_retour',dateRetour);
    params.append('is_mission',`${0}`);
    params.append('demandeur_id',`${this.demandeurService.getDemandeurId()}`);

    //info sur le soutien

    params.append('is_beneficie',`${this.getSoutien().isBeneficie}`);
    params.append('montant_soutien_precedent',`${this.getSoutien().montant}`);
    params.append('type',`${this.getSoutien().isSoutienTotal}`);
    params.append('montantHeberegement',`${this.getSoutien().montantHeberegement}`);
    params.append('montantInscription',`${this.getSoutien().montantInscription}`);
    params.append('montantTransport',`${this.getSoutien().montantTransport}`);
    params.append('autreMontant',`${this.getSoutien().autreMontant}`);




    return this.httpCLient.post<Response>(this.baseUrlDemande,params);
  }
}
