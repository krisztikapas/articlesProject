import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent {

  form: FormGroup;
  id: number;

  constructor(private fb: FormBuilder,
    private service:ApiService,
    private route:ActivatedRoute,
     private dialogRef: MatDialogRef<UpdateArticleComponent>,
     @Inject(MAT_DIALOG_DATA){title ,description, category, createdDateTime, id}) {
       this.id = id;
        //console.log(this.id);
       this.form = fb.group ({
        title: [title, Validators.required],
        description: [description, Validators.required],
        category: [category, Validators.required],
        date: [createdDateTime, Validators.required]
      })
    
      }


      close(){
        console.log("close click");
        this.dialogRef.close();
      }

      save(){
        //this.id = this.route.snapshot.paramMap.get('id');
        this.form.value.id = this.id;
        console.log("save click");
        this.service.updateArticle(this.id, this.form.value).subscribe((data)=>{
          console.log('Data - ', data);
        })
        //console.log(this.id);
      }

}