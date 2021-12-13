import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Response } from '../models/response.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrlRegister = "http://127.0.0.1:8000/api/register";
  private baseUrlLogin = "http://127.0.0.1:8000/api/login";
  private baseUrlLogout = "http://127.0.0.1:8000/api/logout";
  private baseUrlgetUser = "http://127.0.0.1:8000/api/user"
  private user! : User;
  private id : any;
  constructor(private httpClient : HttpClient,private cookieService : CookieService) { }

  getIdUser(){
    return this.id;
  }

  setIdUser(id:any):void{
    this.id = id;
  }
  register(user : User){
    return this.httpClient.post<Response>(this.baseUrlRegister,user);
  }

  isLoggedIn(){
    return !!this.cookieService.get('jwt');
  }


  login(user : User) {
          /*"options": {
            "browserTarget": "fuse:build",
             "proxyConfig": "proxy.conf.json"
            }*/

    /*let headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    });*/

    //let options = new RequestOptions({ headers: headers, withCredentials: true });
    return this.httpClient.post<Response>(this.baseUrlLogin,user,{withCredentials:true})
  }

  logout(){
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  'Bearer '+this.cookieService.get('jwt'))
    }
    return this.httpClient.post<Response>(this.baseUrlLogout,{},header);
  }
  getUser(){
    let j = this.cookieService.get('jwt');
    console.log(j);
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  'Bearer '+this.cookieService.get('jwt'))
    }
    /*let headers = new HttpHeaders({

      'Cookie': 'jwt=27|ZLL5a9MWxeE1fJT3kBDz5VpsNhRY9Ao8FBeDn6hP'
    })*/
    return this.httpClient.get<Response>(this.baseUrlgetUser,header);

  }
}
