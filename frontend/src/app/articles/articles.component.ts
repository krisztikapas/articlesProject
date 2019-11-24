import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { ArticleElement } from '../interfaces/ArticleElement';
import { UpdateArticleComponent } from '../update-article/update-article.component';
import { MatTableDataSource, MatPaginator, MatDialog, MatSort} from '@angular/material';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  displayedColumns: string[] = ['title', 'description', 'category', 'date', 'Actions']
  dataSource;

  @ViewChild(MatSort, {static: false})
   set sort(sort: MatSort) {
   }

   @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator


constructor(private service: ApiService, private dialog: MatDialog) { }

  ngOnInit() {
    this.service.getArticlesWithCategory().subscribe((data) => {
      console.log("Data: - ", data);

      this.dataSource = new MatTableDataSource<ArticleElement>(data as ArticleElement[])
      this.dataSource.paginator = this.paginator;
  })
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateArticle(article){
    this.dialog.open(UpdateArticleComponent, {
      data: {
        id: article.id,
        title: article.title,
        description: article.description,
        category: article.category,
        createdDateTime: article.createdDateTime
      }
    });
  }
}

