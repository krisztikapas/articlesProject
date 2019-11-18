import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryElement } from '../interfaces/CategoryElement';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent{

  form: FormGroup;
  id: number;
  types;

  constructor(private fb: FormBuilder,
    private service:ApiService,
    private router: Router,
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

      this.service.getCategories().subscribe(data =>{
        //console.log("category name", this.types)
        //this.types = data;
        this.types = data;
      })

        
      }
      


      close(){
        this.dialogRef.close();
        this.router.navigate(['/'])
      }

      save(){
        this.form.value.id = this.id;       
        console.log(this.form.value.id);
        this.service.updateArticle(this.id,this.form.value).subscribe((data)=>{
          console.log('Data - ', data);
        })  
      }
      

     

}
