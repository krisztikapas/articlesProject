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

  category={}
  categories
  id;
  constructor(private api:ApiService, private route: ActivatedRoute){

    }

    ngOnInit(){
        //this.id = this.route.snapshot.paramMap.get('id')
        this.api.getCategories().subscribe(data => {
            console.log("data", data)
            this.categories=data
        })
    }

}
