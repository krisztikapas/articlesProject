import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';

//My components
import { ArticlesComponent } from './articles/articles.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';


//forms
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

//my services
import {ApiService} from './api.service'

import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {
  MatSliderModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatTableModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatToolbarModule,
  MatDialogModule,
  MatListModule,
  MatSortModule,
  MatPaginatorModule
 } from '@angular/material';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { DeleteArticleComponent } from './delete-article/delete-article.component';
import { HttpClient } from 'selenium-webdriver/http';
import { ArticleComponent } from './article/article.component';
import { CategoryComponent } from './category/category.component';
import { NewArticlesComponent } from './new-articles/new-articles.component';




@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    HeaderComponent,
    CategoriesComponent,
    UpdateArticleComponent,
    DeleteArticleComponent,
    ArticleComponent,
    CategoryComponent,
    NewArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    CommonModule,
    MatInputModule,
    MatToolbarModule,
    MatSliderModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatDialogModule,
  MatListModule,
  MatSortModule,
  MatPaginatorModule,
  ReactiveFormsModule,
   FormsModule
    
  ],
  entryComponents: [UpdateArticleComponent],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
