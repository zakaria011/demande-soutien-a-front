import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { anyOrAllPropertiesPass } from '@cds/core/internal';
import { DemandeurPerso } from 'src/app/models/demandeur-perso.model';
import { DemandeurServiceService } from 'src/app/services/demandeur-service.service';

@Component({
  selector: 'app-donnees-personnelles',
  templateUrl: './donnees-personnelles.component.html',
  styleUrls: ['./donnees-personnelles.component.css']
})
export class DonneesPersonnellesComponent implements OnInit {
  demandeurPersoForm! : FormGroup;
  demandeurPerso! : DemandeurPerso;
  exist : boolean = false;
  @Output() finish = new EventEmitter();

  constructor(private formBuilder : FormBuilder , private demandeurService : DemandeurServiceService,
        private router : Router
    ) {
    let user = localStorage.getItem('user');
    console.log(user);
    if(user==="null"){
      this.demandeurPersoForm = formBuilder.group(
        {
          demandeurPersoInfos : formBuilder.group(
            {
              nom : ['',Validators.required],
              prenom : ['',Validators.required],
              numTel : ['',Validators.required],
              email : ['',Validators.required],
              //isEnseignant : ['', Validators.required]
            }
          )
        }
      );

    }else {
      if(user){
        let userObj = JSON.parse(user);
        console.log(userObj);
        this.demandeurPersoForm = formBuilder.group(
          {
            demandeurPersoInfos : formBuilder.group(
              {
                nom : [userObj.nom,Validators.required],
                prenom : [userObj.prenom,Validators.required],
                numTel : [userObj.numtel,Validators.required],
                email : [userObj.email,Validators.required],
                //isEnseignant : [userObj.is_professeur, Validators.required]
              }
            )
          }
        );
      }
    }

  }

  handelFinish() {
    const demandeurPerso = {
      ...this.demandeurPersoForm.get("demandeurPersoInfos")?.value
    }

    this.demandeurService.setDemandeurPerso(demandeurPerso);
    console.log(demandeurPerso);
    //this.router.navigate(['']);
    //this.finish.emit({demandeurPerso : demandeurPerso});
  }

  ngOnInit(): void {

  }

}
