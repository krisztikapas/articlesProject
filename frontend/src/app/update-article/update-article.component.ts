import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../api.service';

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
     private dialogRef: MatDialogRef<UpdateArticleComponent>,
     @Inject(MAT_DIALOG_DATA){Title ,Description, Category, CurrentDateTime, Id}) {
       this.id = Id;

       this.form = fb.group ({
        title: [Title, Validators.required],
        description: [Description, Validators.required],
        category: [Category, Validators.required],
        date: [CurrentDateTime, Validators.required]
      })
    
      }

      close(){
        console.log("close click");
        this.dialogRef.close();
      }

      save(){
        this.form.value.id = this.id;
        console.log("save click");
        this.service.updateArticle(this.id, this.form.value).subscribe((data)=>{
          console.log('Data - ', data);
        })
      }

}
