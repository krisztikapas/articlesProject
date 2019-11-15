import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import {Subject} from 'rxjs'
import { ArticleComponent } from './article/article.component';
import { $ } from 'protractor';
import { Options } from 'selenium-webdriver/edge';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private selectedArticle = new Subject<any>();
  articleSelected = this.selectedArticle.asObservable();

  private selectedCategory = new Subject<any>();
  categorySelected = this.selectedCategory.asObservable();


  baseUrl:string = 'https://localhost:44331/api/articles'
  constructor(private http: HttpClient) { }

   postArticle(article){
        return this.http.post('https://localhost:44331/api/articles', article);
    }

    postCategory(category){
      return this.http.post('https://localhost:44331/api/categories', category);
    }

  putArticle(article) {
      this.http.put(`https://localhost:44331/api/articles/${article.id}`, article).subscribe(res => {
            console.log(res)
        }) 
    }

  getArticles(){
    return this.http.get('https://localhost:44331/api/articles');
    //var result1 = this.http.get(`https://localhost:44331/api/categories/${id}`);
     
  }

  getArticlesWithCategory(){
    return this.http.get('https://localhost:44331/api/articles');
    //var result1 = this.http.get(`https://localhost:44331/api/categories/${id}`);
     
  }

  getAarticle(id){
    return this.http.get(`https://localhost:44331/api/articles/${id}`);
  }

  getCategories(){
    return this.http.get('https://localhost:44331/api/categories');
  }

  updateArticle(id, article){
    /*const myheader = new HttpHeaders().set('Content-Type', 'application/json')
    var body = new HttpParams();
    body = body.set('id', article.id);
    console.log("article.id " + article.id);
    body = body.set('title', article.title);
    console.log("article.title" + article.title);*/
/*
    body = body.set('Description:', article.description);
    console.log("article.description" + article.description);

    body = body.set('CategoryId:', article.categoryId);
    console.log("article.catid" + article.category.categoryId);

    body = body.set('Category:{', article.category +'}');
    console.log("article.cat" + article.category);
*/
//{body}
var id= article.id;
var title = article.title;
var description = article.description;
var category = article.category.name;
var catId = article.category.id;

    return this.http.put(`https://localhost:44331/api/articles/${id}`, {id, title, description, category, catId})
  
  }

  deleteArticle(id){
    return this.http.delete('https://localhost:44331/api/articles/'+id);
  }

  selectArticle(article){
    this.selectedArticle.next(article)
}

selectCategory(category){
  this.selectedCategory.next(category)
}


  

 

}
