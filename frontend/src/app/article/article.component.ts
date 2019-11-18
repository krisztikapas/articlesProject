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
  
  
  constructor(private api:ApiService, private route: ActivatedRoute) { 
    this.api.getCategories().subscribe(data =>{
      //this.types = data;
      this.types = data;
      console.log(data)
    });
    
  }


  ngOnInit() {
    //this.categoryId = this.route.snapshot.paramMap.get('categoryId')
    //console.log("Article " + this.article)
    this.api.articleSelected.subscribe(article => this.article = article)

    

}

post(article) {
    //article.articleId = Number(this.articleId)
    //console.log(article.articleId);
    //console.log("types", this.articleId);
    //this.api.getCategoryIdByName(article.category.name)
    this.api.postArticle(article).subscribe(data => {
      console.log("Data - ", data);
    })
    
}

}
