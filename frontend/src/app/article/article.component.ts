import { Component, OnInit, ɵConsole } from '@angular/core';
import {ApiService} from '../api.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  nameList;
  data;
  categoryId;
  article = {}
  constructor(private api:ApiService, private route: ActivatedRoute) { 
    this.api.getCategories().subscribe(mydata =>{

      this.data = mydata;
      this.nameList =mydata;
    });

  }
    
  getNameList()  
  {   
    this.nameList= this.data;   
  }

  ngOnInit() {
    this.api.articleSelected.subscribe(article => {
      this.article = article,
      this.categoryId = article["categoryId"]
    }
      )

}

post(article) {
   article.categoryId = this.categoryId;
    this.api.postArticle(article).subscribe()
    window.location.reload();
    
}

resetCategory(){
  this.categoryId=null;
}

}

