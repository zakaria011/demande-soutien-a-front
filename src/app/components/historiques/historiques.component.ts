import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/models/response.model';
import { AuthService } from 'src/app/services/auth.service';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-historiques',
  templateUrl: './historiques.component.html',
  styleUrls: ['./historiques.component.css']
})
export class HistoriquesComponent implements OnInit {
  userDemandes! : any[];
  constructor(private demandeService : DemandeService, private authService : AuthService) { }

  ngOnInit(): void {
      this.demandeService.getByDemandeur(this.authService.getIdUser()).subscribe(
        (response : Response) => {
          this.userDemandes = response.result;
          console.log(this.userDemandes);
        },
        (err) => {
            console.log(err);
        },
        () => {

        }
      )



    }
  }
