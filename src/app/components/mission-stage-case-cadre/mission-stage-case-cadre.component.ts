import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cadre } from 'src/app/models/cadre.model';
import { MissionService } from 'src/app/services/mission.service';

@Component({
  selector: 'app-mission-stage-case-cadre',
  templateUrl: './mission-stage-case-cadre.component.html',
  styleUrls: ['./mission-stage-case-cadre.component.css']
})
export class MissionStageCaseCadreComponent implements OnInit {

  cadreMissionForm! : FormGroup;

  constructor(private formBuilder : FormBuilder, private missionService : MissionService) {
       this.cadreMissionForm = this.formBuilder.group({

            cadreMissionInfosForm : this.formBuilder.group({
              isFinance : ['',Validators.required],
              cadre : ['',Validators.required],
              intituleProjet : ['',Validators.required],
              responsableMarocain : ['',Validators.required],
              partenaireEtranger : ['',Validators.required]
            })
       });

   }

  ngOnInit(): void {
  }

  handleFinish(): void {
    const cadre = {
      ...this.cadreMissionForm.get('cadreMissionInfosForm')?.value
    }

    this.missionService.setCadre(cadre);
    console.log(cadre);

  }

}
