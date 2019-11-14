import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//component
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { CategoriesComponent } from './categories/categories.component';
import { DeleteArticleComponent } from './delete-article/delete-article.component';

//route
const routes:Routes =[
  {path: '', component:ArticlesComponent},
  {path: 'article', component:ArticleComponent},
  {path: 'categories', component:CategoriesComponent},
  {path: 'delete-article/:id', component:DeleteArticleComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
