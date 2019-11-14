import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

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
    date:''
  }
  message:string

  constructor(private route:ActivatedRoute, private service:ApiService,
    private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getAarticle(this.id).subscribe((data:any)=>{
      console.log("Data - ", data);
      this.article.title=data.title;
      this.article.description=data.description;
      this.article.category=data.category;
      this.article.date = data.createdDateTime;
      

    })
  }

  cancel(){
    console.log("cancel clicked!");
    this.router.navigate(['/'])
  }

  confirm(){
    //console.log("confirm clicked!");
    this.service.deleteArticle(this.id).subscribe(data => 
      console.log(data));
  }


}
