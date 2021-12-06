import { ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemandeurPro } from 'src/app/models/demandeur-pro.model';
import { DemandeurServiceService } from 'src/app/services/demandeur-service.service';

@Component({
  selector: 'app-donnees-profesionnelles',
  templateUrl: './donnees-profesionnelles.component.html',
  styleUrls: [
  ]
})
export class DonneesProfesionnellesComponent implements OnInit, OnDestroy {
  demandeurProForm! : FormGroup;
  isEnseignant : boolean = true;
  demandeurPerso! : DemandeurPro;
  constructor(private formBuilder : FormBuilder, private demandeurService : DemandeurServiceService , private cd : ChangeDetectorRef) {

  }

  ngOnInit(): void {
    //console.log(this.demandeurService.getDemandeurPerso().isEnseignant);



  }
  selected(value : boolean){
       this.isEnseignant =  value;
        this.init();
       console.log(this.isEnseignant)


  }

  init(){
    if(this.isEnseignant){
      this.demandeurProForm = this.formBuilder.group({
        demandeurProInfos : this.formBuilder.group({
          isEnseignant :  ['',Validators.required],
          grade : ['',Validators.required],
          etablissement :['',Validators.required],
          ced :['',Validators.required],
          entiteDeRecherche :['',Validators.required],
          responsableDeRecherche :['',Validators.required],

        })

      });
    }else{
      this.demandeurProForm = this.formBuilder.group({
        demandeurProInfos : this.formBuilder.group({
          isEnseignant :  ['',Validators.required],
          etablissement :['',Validators.required],
          ced :['',Validators.required],
          anneeThese :['',Validators.required],
          directeurThere :['',Validators.required],
          entiteDeRecherche :['',Validators.required],
          responsableEntite :['',Validators.required],
          isSalarie :['',Validators.required],

        })
      });
    }
  }
  handelFinish(){
    const demandeurPro = {
      ...this.demandeurProForm.get("demandeurProInfos")?.value
    }

    this.demandeurService.setDemandeurPro(demandeurPro);
    console.log(demandeurPro);
  }

  ngOnDestroy(): void {

  }









}
