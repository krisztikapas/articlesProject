import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Subject} from 'rxjs'
import { ArticleElement } from './interfaces/ArticleElement';
import { $ } from 'protractor';


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
        return this.http.post('https://localhost:44331/api/articles',  article);
    }

  postCategory(category){
      return this.http.post('https://localhost:44331/api/categories', category);
    }

  putArticle(article) {
      this.http.put(`https://localhost:44331/api/articles/${article.id}`, article).subscribe(res => {
            console.log(res)
        }) 
    }

    putCategory(category) {
      this.http.put(`https://localhost:44331/api/categories/${category.id}`, category).subscribe(res => {
            console.log(res)
        }) 
    }

  getArticles(){
    return this.http.get('https://localhost:44331/api/articles');
     
  }

  getArticlesWithCategory(){
    return this.http.get<any[]>('https://localhost:44331/api/articles');
     
  }

  getAarticle(id){
    return this.http.get(`https://localhost:44331/api/articles/${id}`);
  }

  getCategory(id){
    return this.http.get(`https://localhost:44331/api/categories/${id}`);
}

getCategoryIdByName(category){
  return this.http.get(`https://localhost:44331/api/categories/GetCategoryIdByName?name=${category.name}`);
}

  getCategories(){
    return this.http.get('https://localhost:44331/api/categories/');
  }

 

  updateArticle(id, article){
  var id= article.id;
  var title = article.title;
  var description = article.description;
  var category = article.category;
  var catId = article.category.id;
  return this.http.put(`https://localhost:44331/api/articles/${id}`, {id, title, description, category, catId})
  
  }
  updateArticleFromPopup(catId,article){
    var id= article.id;
    var title = article.title;
    var description = article.description;
    var category = article.category;
    
    return this.http.put(`https://localhost:44331/api/articles/PutArticleAndUpdateCategory?id=${catId}`, {id, title, description, category,catId})
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
