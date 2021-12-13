import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Response } from 'src/app/models/response.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm! : FormGroup;
  constructor(private formBuilder : FormBuilder , private authService : AuthService,
      private router : Router
    ) {

    this.signupForm = this.formBuilder.group({
      name : ['',Validators.required],
      lastname : ['',Validators.required],
      email : ['',Validators.required],
      password : ['',Validators.required],
      password_confirmation : ['',Validators.required],

    });
  }

  ngOnInit(): void {
  }

  submit(){
    this.authService.register(this.signupForm.getRawValue()).subscribe(
     (response : Response)=>{
        console.log(response.result);
        this.router.navigate(['/signin']);
     },
     (err) => {
      console.log(err);
     },
     () => {

     }
    );
    console.log(this.signupForm.getRawValue());
  }

}
