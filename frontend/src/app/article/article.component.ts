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
  countryValue;
  selectedValue: string;
  nameList;
  data;
  nameId;
  
  constructor(private api:ApiService, private route: ActivatedRoute) { 
    this.api.getCategories().subscribe(mydata =>{

      this.data = mydata;
      this.nameList =mydata;
      console.log("category "+ this.nameList)
    });

  }
    
  getNameList()  
  {   
    this.nameList= this.data;   
  }

  ngOnInit() {
    this.api.articleSelected.subscribe(article => this.article = article)

}

post(article) {
   article.categoryId = this.nameId;
    this.api.postArticle(article).subscribe(data => {
      console.log("Data - ", data ,"selected",this.nameId);
    })
    window.location.reload();
    
}

}

