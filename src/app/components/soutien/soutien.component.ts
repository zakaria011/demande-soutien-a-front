import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MissionService } from 'src/app/services/mission.service';

@Component({
  selector: 'app-soutien',
  templateUrl: './soutien.component.html',
  styleUrls: ['./soutien.component.css']
})
export class SoutienComponent implements OnInit {
  soutienForm! : FormGroup;
  constructor(private formBuilder : FormBuilder, private missionService : MissionService) {
      this.soutienForm = this.formBuilder.group({
        soutienInfosForm : this.formBuilder.group({
          isBeneficie : ['',Validators.required],
          montant : ['',Validators.required],
          isSoutienTotal : ['',Validators.required],
          montantTransport : ['',Validators.required],
          montantInscription : ['',Validators.required],
          montantHeberegement : ['',Validators.required],
          autreMontant : ['',Validators.required]
        })
      });

  }

  ngOnInit(): void {
  }

  handleFinish(): void {
    const soutien = {
      ...this.soutienForm.get('soutienInfosForm')?.value
    }

    this.missionService.setSoutien(soutien);
    console.log(soutien);
  }

}
