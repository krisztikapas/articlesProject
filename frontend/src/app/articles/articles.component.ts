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
    this.service.getArticles().subscribe((data) => {
      console.log("Data: - ", data);
      this.dataSource = new MatTableDataSource<ArticleElement>(data as ArticleElement[])
  })
  }

  updateArticle(article){
    console.log(article);
    this.dialog.open(UpdateArticleComponent, {
      data: {
        Id: article.Id,
        Title: article.Title,
        Description: article.Description,
        Category: article.Category,
        Date: article.Date
      }
    });
  }
}

