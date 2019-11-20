import { Component, Inject, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService} from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryElement } from '../interfaces/CategoryElement';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit{

  form: FormGroup;
  id: number;
  selectedValue;
  nameList;
  data;
  nameId;
  article ={}
  category:CategoryElement
  categoryName: string;
  categoryId: number

  constructor(private fb: FormBuilder,
    private service:ApiService,
    private router: Router,
    private route:ActivatedRoute,
     private dialogRef: MatDialogRef<UpdateArticleComponent>,
     @Inject(MAT_DIALOG_DATA){title ,description, category, createdDateTime, id}) {
       this.id = id;
       this.categoryName = category;
       console.log("update",title ,description, category, createdDateTime, id);
       this.categoryId=category["id"]
       
        this.form = fb.group ({
        title: [title, Validators.required],
        description: [description, Validators.required],
        category: [category, Validators.required],
        date: [{value: createdDateTime,disabled:true}]
        
      });

      this.service.getCategories().subscribe(mydata =>{
        this.nameList = mydata;
        this.data = mydata;
        category =mydata;
        this.categoryName = category;
      });

      this.service.getCategoryIdByName(this.categoryName).subscribe(result => {
        this.nameId = result;
      });
    //  this.selectName();
    }
  
      
    getNameList()  
  {   
    this.nameList= this.data;   
  }

  /*selectName()
{
  //alert(this.categoryId);
} */ 

  ngOnInit() {
    this.service.categorySelected.subscribe(item =>{
       this.article = item})
}


      close(){
        this.dialogRef.close();
        this.router.navigate(['/'])
      }

      save(){
        this.form.value.id = this.id;   
        this.form.value.categoryId = this.categoryId;
        var cat =  this.service.getCategory(this.form.value.categoryId);

        this.service.updateArticleFromPopup(this.categoryId,this.form.value).subscribe((data)=>{
          console.log('Data - ', data);
        })  
      }

      
      

     

}
