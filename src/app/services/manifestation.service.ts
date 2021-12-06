import { Injectable } from '@angular/core';
import { Manifestation } from '../models/manifestation.model';
import { Soutien } from '../models/soutien.model';

@Injectable({
  providedIn: 'root'
})
export class ManifestationService {
  private soutien! : Soutien;
  private manifestation! : Manifestation
  constructor() { }

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
}
