import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private selectedArticle = new Subject<any>();
  articleSelected = this.selectedArticle.asObservable();


  baseUrl:string = 'https://localhost:44331/api/articles'
  constructor(private http: HttpClient) { }

   postArticle(article){
        return this.http.post('https://localhost:44331/api/articles', article);
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
  return this.http.put('https://localhost:44331/api/articles/'+id, article);
  }

  deleteArticle(id){
    return this.http.delete('https://localhost:44331/api/articles/'+id);
  }

  selectArticle(article){
    this.selectedArticle.next(article)
}


  

 

}
