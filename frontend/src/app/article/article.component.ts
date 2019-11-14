import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article = {}
  articleId
  constructor(private api:ApiService, private route: ActivatedRoute) { }

ngOnInit() {
    this.articleId = this.route.snapshot.paramMap.get('articleId')
    console.log(this.articleId);
    this.api.articleSelected.subscribe(article => this.article = article)
}

post(article) {
    article.articleId = Number(this.articleId)
    console.log(article.articleId);
    this.api.postArticle(article).subscribe(data => {
      console.log("Data - ", data);
    })
}

}
