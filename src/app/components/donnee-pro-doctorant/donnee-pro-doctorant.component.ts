import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemandeurPro } from 'src/app/models/demandeur-pro.model';
import { Response } from 'src/app/models/response.model';
import { DemandeurServiceService } from 'src/app/services/demandeur-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-donnee-pro-doctorant',
  templateUrl: './donnee-pro-doctorant.component.html',
  styleUrls: ['./donnee-pro-doctorant.component.css']
})
export class DonneeProDoctorantComponent implements OnInit {
  demandeurProForm! : FormGroup;
  isEnseignant : boolean = true;
  demandeurPro! : DemandeurPro;
  constructor(private formBuilder : FormBuilder, private demandeurService : DemandeurServiceService) {
    this.demandeurProForm = this.formBuilder.group({
      demandeurProInfos : this.formBuilder.group({
        isEnseignant :  [false,Validators.required],
        etablissement :['',Validators.required],
        ced :['',Validators.required],
        anneeThese :['',Validators.required],
        directeurThese :['',Validators.required],
        entiteDeRecherche :['',Validators.required],
        responsableEntite :['',Validators.required],
        isSalarie :['',Validators.required],
      })
    });
  }

  ngOnInit(): void {
  }

  handleFinish(){
    const demandeurPro = {
      ...this.demandeurProForm.get("demandeurProInfos")?.value
    }

    this.demandeurService.setDemandeurPro(demandeurPro);
    this.demandeurService.addDemandeur().subscribe(

      (response : Response) => {
        if(response.status==200)
          console.log(response.result);
          this.demandeurService.setDemandeurId(response.result.id);
      },
      (err) => {
        console.log(err);
      },
      ()=> {
        console.log("...");
      }
    )
    console.log(demandeurPro);
    Swal.fire('validation','Valider avec succès ! Passez à la prochaine étape','success')


  }
}
