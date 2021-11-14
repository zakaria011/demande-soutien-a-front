import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postule',
  templateUrl: './postule.component.html',
  styleUrls: ['./postule.component.css']
})
export class PostuleComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

}
