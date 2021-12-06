import { Injectable } from '@angular/core';
import { Cadre } from '../models/cadre.model';
import { MissionGenerale } from '../models/mission-generale.model';
import { Soutien } from '../models/soutien.model';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private missionGenerale! : MissionGenerale;
  private cadre! : Cadre;
  private soutien! : Soutien
  constructor() { }

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
}
