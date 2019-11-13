import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getArticles(){
    return this.http.get('https://localhost:44331/api/articles');
  }

  getAarticle(id){
    return this.http.get(`https://localhost:44331/api/articles/${id}`);
  }

  getCategories(){
    return this.http.get('https://localhost:44331/api/categories');
  }

  updateArticle(id, article){
  return this.http.put('https://localhost:44331/api/articles/' + '/' + id, article);
  }

  deleteArticle(id){
    return this.http.delete(`https://localhost:44331/api/articles/${id}`);
  }

 

}
