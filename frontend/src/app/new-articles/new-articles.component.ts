import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-new-articles',
  templateUrl: './new-articles.component.html',
  styleUrls: ['./new-articles.component.css']
})
export class NewArticlesComponent implements OnInit {

  article={}
  articles
  id;
  constructor(private api:ApiService, private route: ActivatedRoute){

    }

    ngOnInit(){
        //this.id = this.route.snapshot.paramMap.get('id')
        this.api.getArticles().subscribe(data => {
            console.log("data", data)
            this.articles=data
        })
    }

}
