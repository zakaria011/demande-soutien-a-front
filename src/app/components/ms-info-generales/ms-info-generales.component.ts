import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from 'src/app/models/response.model';
import { ManifestationService } from 'src/app/services/manifestation.service';

@Component({
  selector: 'app-ms-info-generales',
  templateUrl: './ms-info-generales.component.html',
  styleUrls: ['./ms-info-generales.component.css']
})
export class MsInfoGeneralesComponent implements OnInit {
  manifestationForm! : FormGroup;
  constructor(private formBuilder : FormBuilder, private manifestationService : ManifestationService) {
    this.manifestationForm = formBuilder.group({
      manifestationInfosForm : formBuilder.group({
        intituleManifestation : ['',Validators.required],
        intituleParticipation : ['',Validators.required],
        pays : ['',Validators.required],
        ville : ['',Validators.required],
        dateDebut : ['',Validators.required],
        dateFin : ['',Validators.required],
        dateDepart : ['',Validators.required],
        dateRetour  : ['',Validators.required],
        natureParticipation : ['',Validators.required]
      })
    });

  }

  ngOnInit(): void {
  }

  handleFinish(){
      const manifestation = {
        ...this.manifestationForm.get('manifestationInfosForm')?.value
      }
      this.manifestationService.setManifestation(manifestation);


      console.log(manifestation);
  }

}
