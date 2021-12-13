import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Emitters } from 'src/app/emitters/emitters';
import { Response } from 'src/app/models/response.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private cookie! : string;
  constructor(private autService : AuthService,private cookieService : CookieService) { }

  ngOnInit(): void {


    this.autService.getUser().subscribe(
      (response : Response)=>{
        Emitters.authEmitter.emit(true);
      },
      () => {
        Emitters.authEmitter.emit(false);
      },
      () => {

      }
    )
  }

}
