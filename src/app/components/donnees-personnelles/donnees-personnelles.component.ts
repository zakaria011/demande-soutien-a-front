import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  @Output() finish = new EventEmitter();

  constructor(private formBuilder : FormBuilder , private demandeurService : DemandeurServiceService) {

    this.demandeurPersoForm = formBuilder.group(
      {
        demandeurPersoInfos : formBuilder.group(
          {
            nom : ['',Validators.required],
            prenom : ['',Validators.required],
            numTel : ['',Validators.required],
            email : ['',Validators.required],
            isEnseignant : ['', Validators.required]
          }
        )
      }
    );

  }

  handelFinish() {
    const demandeurPerso = {
      ...this.demandeurPersoForm.get("demandeurPersoInfos")?.value
    }

    this.demandeurService.setDemandeurPerso(demandeurPerso);
    console.log(demandeurPerso);
    //this.finish.emit({demandeurPerso : demandeurPerso});
  }

  ngOnInit(): void {

  }

}
