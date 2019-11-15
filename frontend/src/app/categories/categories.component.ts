import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CategoryElement } from '../interfaces/CategoryElement';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  displayedColumns: string[] = ['name', 'date']
  dataSource;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getCategories().subscribe((data) => {
      console.log("Data: - ", data);
      this.dataSource = new MatTableDataSource<CategoryElement>(data as CategoryElement[])
  })
  }

}
