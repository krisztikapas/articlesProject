import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CategoryElement } from '../interfaces/CategoryElement';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  displayedColumns: string[] = ['name', 'date']
  dataSource;
  
  constructor(private service: ApiService) { }  


  ngOnInit() {
    this.service.getCategories().subscribe((data) => {
      console.log("Data: - ", data);
      this.dataSource = new MatTableDataSource<CategoryElement>(data as CategoryElement[])
  })
  }

}
