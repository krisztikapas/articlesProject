import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CategoryElement } from '../interfaces/CategoryElement';
import { ArticleElement } from '../interfaces/ArticleElement';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent implements OnInit {

  id;
  article={
    title:'',
    description:'',
    category:'',
    date:'',
    categoryId:''
  }
  message:string

  constructor(private route:ActivatedRoute, private service:ApiService,
    private router:Router) {

     }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getAarticle(this.id).subscribe((data:any)=>{
      console.log("Data - ", data);
      this.article.title=data.title;
      this.article.description=data.description;
      this.article.categoryId = data.categoryId;
      //this.article.category=data.category;
      this.article.date = data.createdDateTime;

      console.log("categoryId", data.categoryId)
      this.service.getCategory(data.categoryId).subscribe(result => {
        this.article.category = result["name"];
      })

    })


    

    
  }

  cancel(){
    this.router.navigate(['/'])
  }

  confirm(){
    this.service.deleteArticle(this.id).subscribe(data => 
      console.log(data));
      this.router.navigate(['/'])
      this.service.getArticlesWithCategory().subscribe();
  }


}
