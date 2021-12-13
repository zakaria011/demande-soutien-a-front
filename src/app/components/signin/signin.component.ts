import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, UrlSegmentGroup } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Response } from 'src/app/models/response.model';
import { CookieService } from 'ngx-cookie-service';
import { DemandeurServiceService } from 'src/app/services/demandeur-service.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinFrom! : FormGroup;

  private baseUrlLogin = "http://127.0.0.1:8000/api/login";

  constructor(private formBuilder : FormBuilder, private authService : AuthService,
      private router : Router, private httpClient : HttpClient,
      private cookieService : CookieService, private demandeurService : DemandeurServiceService
    ) {

      this.signinFrom = this.formBuilder.group({
        email : ['',Validators.required],
        password : ['',Validators.required]
      });
    }

  ngOnInit(): void {
  }

  submit() : void{

    this.authService.login(this.signinFrom.getRawValue()).subscribe(
      (response : Response)=>{
        console.log(response);
        this.cookieService.set('jwt',response.result.message,60 * 24);
        this.authService.setIdUser(response.result.idUser);
        console.log(this.authService.getIdUser());
        this.demandeurService.findByUser(response.result.idUser).subscribe(
          (response : Response)=> {
              localStorage.setItem("user",JSON.stringify(response.result));
          },
          (err) => {
            console.log(err);
          }
        )

        this.router.navigate(['/home']);

      },
      (err) => {
      console.log(err);
      },
      () => {

      }
    );

    /*this.httpClient.post(this.baseUrlLogin,{},{withCredentials:true})
      .subscribe(
        (response)=>{
          console.log(response);
          this.router.navigate(['/home']);
        },
      (err) => {
        console.log(err);
      },
      () => {

      }
      )*/
    /*this.authService.login(this.signinFrom.getRawValue()).subscribe(
      () => {
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
      },
      () =>{

      }

    )*/
    /*const headerDict = {
      // 'Content-Type': 'application/json',
      // 'Accept': 'application/json',
       'Access-Control-Allow-Headers': '*',
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Methods': '*',
       'Access-Control-Allow-Credentials': 'true'
     }
    let headers = new HttpHeaders({
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Credentials': 'true'
    });
    this.httpClient.get<Response>('http://127.0.0.1:8000/sanctum/csrf-cookie',{withCredentials:true}).subscribe(
      (res)=> {
        this.httpClient.post<Response>(this.baseUrlLogin,this.signinFrom.getRawValue(),{withCredentials:true}).subscribe(
           ()=>{
            this.router.navigate(['/home']);
           },
           (err) => {
            console.log("222");
            console.log(err);
           },
           () => {

           }
         )
         console.log();
      }
      ,(err :any) => {
        console.log("11");
        console.log(err);

      },
      ()=> {


      }
    );*/


  }
}
