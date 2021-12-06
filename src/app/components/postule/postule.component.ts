import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeurServiceService } from 'src/app/services/demandeur-service.service';
import { ManifestationService } from 'src/app/services/manifestation.service';
import { MissionService } from 'src/app/services/mission.service';

@Component({
  selector: 'app-postule',
  templateUrl: './postule.component.html',
  styleUrls: ['./postule.component.css']
})
export class PostuleComponent implements OnInit {

  constructor(private router : Router, private route : ActivatedRoute,  private demandeurService : DemandeurServiceService,
        private missonService : MissionService, private manifestationService : ManifestationService
    ) { }

  ngOnInit(): void {



  }

  isMission(): boolean {
    let type = this.route.snapshot.params.type;
    if(type=="mission") return true;
    return false;
  }

  handleFinish(){
    console.log(this.demandeurService.getDemandeurPerso());
    console.log(this.demandeurService.getDemandeurPro());

      if(this.isMission()){
        console.log("emit....");
        console.log(this.missonService.getCadre());
        console.log(this.missonService.getMissionGenerale());
        console.log(this.missonService.getSoutien());
      }else{
        console.log("emit....");
        console.log(this.manifestationService.getManifestation());
        console.log(this.manifestationService.getSoutien());
      }
      console.log("emit....");

  }
}
