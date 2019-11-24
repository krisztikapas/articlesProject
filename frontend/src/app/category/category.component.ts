import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryId;
  category ={}
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.api.categorySelected.subscribe(category => this.category = category)
}

  post(category) {
    this.api.postCategory(category).subscribe(data => {
      console.log("data:" , data);
      window.location.reload();
    })
}

}
