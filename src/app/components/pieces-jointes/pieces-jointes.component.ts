import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from 'src/app/models/response.model';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-pieces-jointes',
  templateUrl: './pieces-jointes.component.html',
  styleUrls: ['./pieces-jointes.component.css']
})
export class PiecesJointesComponent implements OnInit {
  fileForm! : FormGroup;
  files! : any;
  index = 0;
  constructor(private formBuilder : FormBuilder, private fileService : FileService ) {
      this.fileForm = formBuilder.group(
        {
          cin : ['',Validators.required]
        }
      )

   }

  ngOnInit(): void {
  }

  uploadFile(event : any){
    this.files = event.target.files[0];
    console.log(this.files);
    this.index ++;
    let formData = new FormData();

    formData.append('file',this.files,this.files.name);
  }

  sendFiles(){
    let formData = new FormData();

    formData.append('file',this.files,this.files.name);
    formData.append('name',"cin");

    this.fileService.uploadFile(formData).subscribe(

      (res : Response)=> {
          if(res.status == 200){
            console.log(res.message);
          }
      },

      (err) => {
        console.log(err);
      }
    )
  }
}
