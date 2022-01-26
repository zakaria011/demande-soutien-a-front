import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private baseUrl = "http://127.0.0.1:8000/api/"
  constructor(private httpClient : HttpClient) { }


  uploadFile(data : any){
    return this.httpClient.post<Response>(this.baseUrl+'files/uploadFile',data)
  }

}
