import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
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
  constructor(private api:ApiService, private route: ActivatedRoute){}

    ngOnInit(){
        this.api.getCategories().subscribe(data => {
            console.log("data", data)
            this.categories=data
        })
    }

}
