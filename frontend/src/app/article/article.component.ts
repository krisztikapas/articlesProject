import { Component, OnInit, ɵConsole } from '@angular/core';
import {ApiService} from '../api.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article = {}
  articleId;
  types;
  category
  countryValue;
  selectedValue: string;
  nameList;
  data;
  nameId;
  
  constructor(private api:ApiService, private route: ActivatedRoute) { 
    this.api.getCategories().subscribe(mydata =>{
      //this.types = data;
      //this.types = mydata;
      this.data = mydata;
      this.nameList =mydata;
      console.log("646 "+ this.nameList)
    });

    //initsjkdlkalsajdla
    /*this.nameList=[    
      {    
        "id": 3,    
        "name": "Attorney Case"    
      },    
      {    
        "id": 1035,    
        "name": "bikesh appeal"    
      },    
      {    
        "id": 22,    
        "name": "BikeshAppeal"    
      },    
      {    
        "id": 20,    
        "name": "Case Info"    
      },    
      {    
        "id": 15,    
        "name": "Case Infoe"    
      },    
      {    
        "id": 11,    
        "name": "Case Prep"    
      }        
    ]    */
  }
  
    
  getNameList()  
{   
this.nameList= this.data;   
}
selectName()
{
alert(this.nameId);
}  

  ngOnInit() {
    //this.categoryId = this.route.snapshot.paramMap.get('categoryId')
    //console.log("Article " + this.article)
    this.api.articleSelected.subscribe(article => this.article = article)
  //  this.api.categorySelected.subscribe(category => this.category = category)

  console.log("selected",this.nameId);

}

post(article) {
    //article.articleId = Number(this.articleId)
    console.log(article);
    //console.log("types", this.articleId);
    //var s = this.api.getCategoryIdByName();
   // console.log("---"+ s +" --")
   console.log("selected",this.nameId);
   article.categoryId = this.nameId;
    this.api.postArticle(article).subscribe(data => {
      console.log("Data - ", data ,"selected",this.nameId);

    })
    
}

}

