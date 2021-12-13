import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Emitters } from 'src/app/emitters/emitters';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  isAuthenticated : boolean = false;
  constructor(private authService : AuthService, private cookieService : CookieService,
          private router : Router
    ) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth : boolean) => {
        this.isAuthenticated = auth;
      }
    )
  }

  logout() : void {
    this.authService.logout().subscribe(
      () => {
        this.cookieService.delete('jwt');
        localStorage.removeItem('user');
        this.isAuthenticated = false;
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
