import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from 'src/app/models/response.model';
import { MissionService } from 'src/app/services/mission.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mission-stage-info-generales',
  templateUrl: './mission-stage-info-generales.component.html',
  styleUrls: ['./mission-stage-info-generales.component.css']
})
export class MissionStageInfoGeneralesComponent implements OnInit {

  missionGeneraleForm! : FormGroup;
  constructor(private formBuilder : FormBuilder, private missionService : MissionService) {
     this.missionGeneraleForm = this.formBuilder.group({
      missionGeneraleInfosForm : this.formBuilder.group({
          objetMission : ['',Validators.required],
          pays : ['',Validators.required],
          ville : ['',Validators.required],
          dateDebut : ['',Validators.required],
          dateFin : ['',Validators.required],
          dateDepart : ['',Validators.required],
          dateRetour : ['',Validators.required]
       })
     });

  }

  ngOnInit(): void {
  }

  handleFinish(){
    const missionGenerale = {
      ...this.missionGeneraleForm.get("missionGeneraleInfosForm")?.value
    }

    this.missionService.setMissionGenerale(missionGenerale);

    console.log(missionGenerale);
    Swal.fire('validation','Valider avec succès ! Passez à la prochaine étape','success')


  }
  }


