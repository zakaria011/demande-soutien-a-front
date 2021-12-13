import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../models/response.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private BaseUrl = "http://127.0.0.1:8000/api/demande/";
  constructor(private httpClient : HttpClient, private authService : AuthService) { }

  getByDemandeur(id :any){
    //let params = new HttpParams().set("id",id);
    return this.httpClient.get<Response>(this.BaseUrl+'findByDemandeur/'+id);
  }

}
