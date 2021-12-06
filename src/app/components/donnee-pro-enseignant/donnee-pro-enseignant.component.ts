import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemandeurPro } from 'src/app/models/demandeur-pro.model';
import { DemandeurServiceService } from 'src/app/services/demandeur-service.service';

@Component({
  selector: 'app-donnee-pro-enseignant',
  templateUrl: './donnee-pro-enseignant.component.html',
  styleUrls: ['./donnee-pro-enseignant.component.css']
})
export class DonneeProEnseignantComponent implements OnInit {
  demandeurProForm! : FormGroup;
  //isEnseignant : boolean = true;
  demandeurPro! : DemandeurPro;
  constructor(private formBuilder : FormBuilder,private demandeurService : DemandeurServiceService) {
    this.demandeurProForm = this.formBuilder.group({
      demandeurProInfos : this.formBuilder.group({
        isEnseignant :  [true,Validators.required],
        grade : ['',Validators.required],
        etablissement :['',Validators.required],
        ced :['',Validators.required],
        entiteDeRecherche :['',Validators.required],
        responsableEntite :['',Validators.required],
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

      (response) => {
        if(response.status == 200)
          console.log(response);
      },
      (err) => {
        console.log(err);
      },
      ()=> {
        console.log("...");
      }
    )
    console.log(demandeurPro);

  }

}
