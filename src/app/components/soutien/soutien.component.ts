import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Emitters } from 'src/app/emitters/emitters';
import { Response } from 'src/app/models/response.model';
import { DemandeurServiceService } from 'src/app/services/demandeur-service.service';
import { ManifestationService } from 'src/app/services/manifestation.service';
import { MissionService } from 'src/app/services/mission.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-soutien',
  templateUrl: './soutien.component.html',
  styleUrls: ['./soutien.component.css']
})
export class SoutienComponent implements OnInit {
  soutienForm! : FormGroup;
  type! : string;
  constructor(private formBuilder : FormBuilder, private missionService : MissionService,
    private route : ActivatedRoute,  private demandeurService : DemandeurServiceService,
        private missonService : MissionService, private manifestationService : ManifestationService,
        private router : Router
    ) {
      this.soutienForm = this.formBuilder.group({
        soutienInfosForm : this.formBuilder.group({
          isBeneficie : ['',Validators.required],
          montant : ['',Validators.required],
          isSoutienTotal : ['',Validators.required],
          montantTransport : [0,Validators.required],
          montantInscription : [0,Validators.required],
          montantHeberegement : [0,Validators.required],
          autreMontant : [0,Validators.required]
        })
      });

  }

  ngOnInit(): void {
    Emitters.typeEmitter.subscribe(
      (val : string) => {
        this.type = val;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  handleFinish(): void {
    const soutien = {
      ...this.soutienForm.get('soutienInfosForm')?.value
    }



    console.log(this.type);
    console.log("wwww");
    if(this.type=="mission") {
      this.missionService.setSoutien(soutien);
      this.missionService.addMission().subscribe(
        (response :Response)=>{
          if(response.status == 200){
            console.log(response.result);
            Swal.fire('validation','Valider avec succès ! Votre demande sera traiter le plus tot possible','success');
            this.router.navigate(['/historiques'])
          }
        },
        () => {

        },

        ()=>{
          console.log("...")
        }
      );
    }else {
      this.manifestationService.setSoutien(soutien);
      this.manifestationService.addManifestation().subscribe(
        (response :Response)=>{
          if(response.status == 200){
            console.log(response.result);
            Swal.fire('validation','Valider avec succès ! Votre demande sera traiter le plus tot possible','success');
            this.router.navigate(['/historiques'])
          }
        },
        (err) => {
          console.log(err);
        },

        ()=>{
          console.log("...");
        }
      );
    }

    console.log(soutien);


  }

}
