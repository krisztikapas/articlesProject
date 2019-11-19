import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryElement } from '../interfaces/CategoryElement';
import { CategoryComponent } from '../category/category.component';
import { ArticleElement } from '../interfaces/ArticleElement';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent{

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
        console.log("category---",category);
        this.categoryName = category;
        console.log(this.categoryName + "-----")
       
        this.form = fb.group ({
        title: [title, Validators.required],
        description: [description, Validators.required],
        category: [category, Validators.required],
        date: [createdDateTime, Validators.required]
      });
      console.log(title ,description, category.categoryId, createdDateTime, id);

      this.service.getCategories().subscribe(mydata =>{
        this.nameList = mydata;
        this.data = mydata;
        category =mydata;
        this.categoryName = category;
        console.log("category---d-fd--fd- "+ category)
      });
      this.service.getCategoryIdByName(this.categoryName).subscribe(result => {
        this.nameId = result;
             
        console.log("getElementIdByName", this.nameId, this.nameList);
        //this.category.categoryId
      });
      this.selectName();
    }
  
      
    getNameList()  
  {   
    this.nameList= this.data;   
  }

  selectName()
{
  console.log("slected change:" + this.categoryName)
  alert(this.categoryId);
}  

  ngOnInit() {
    this.service.categorySelected.subscribe(item => {this.article = item,
                                                      item.categoryId=this.categoryId
                                                    })
    console.log("this.categoir",this.categoryName)


}


      close(){
        this.dialogRef.close();
        this.router.navigate(['/'])
      }

      save(){
        this.form.value.id = this.id;   

        //this.form.value.categoryId = this.nameId;   
      console.log("form value", this.categoryId);
      this.form.value.categoryId = this.categoryId;
      //this.form.value.article.category={};
      var cat =  this.service.getCategory(this.form.value.categoryId);
      //this.form.value.category = this.service.getCategory(this.categoryId);//.subscribe((data)=>{ console.log('Data hjhdjshks - ', data);});
      console.log("this form value" + this.form.value )
      console.log("this form value" + JSON.stringify(this.form.value.category ))


        this.service.updateArticleFromPopup(this.categoryId,this.form.value).subscribe((data)=>{
          console.log('Data - ', data);
        })  
      }

      
      

     

}
