import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ArticleElement } from '../interfaces/ArticleElement';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { UpdateArticleComponent } from '../update-article/update-article.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  displayedColumns: string[] = ['title', 'description', 'category', 'date', 'Actions']
  dataSource;


constructor(private service: ApiService, private dialog: MatDialog) { }

  ngOnInit() {
    this.service.getArticlesWithCategory().subscribe((data) => {
      console.log("Data: - ", data);
     // console.log("categoryName ", d);

      this.dataSource = new MatTableDataSource<ArticleElement>(data as ArticleElement[])
  })
  }

  updateArticle(article){
    console.log(article);
    this.dialog.open(UpdateArticleComponent, {
      data: {
        id: article.id,
        title: article.title,
        description: article.description,
        category: article.category.name,
        createdDateTime: article.createdDateTime
      }
    });
  }
}

