import { Component } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories: Category[]
  constructor() {
    this.categories = [
      {
        name: "Computer Science"
      },
      {
        name: "Computer Science"
      },
      {
        name: "Computer Science"
      },
      {
        name: "Computer Science"
      },
      {
        name: "Computer Science"
      },
      {
        name: "Computer Science"
      },
      {
        name: "Computer Science"
      },
      {
        name: "Computer Science"
      },
      {
        name: "Computer Science"
      },
      {
        name: "Computer Science"
      },
      {
        name: "Computer Science"
      },
      {
        name: "Computer Science"
      },
    ]
  }

}
