import { Component } from '@angular/core';
import {Category, categories} from '../categories';
import {Product, products} from "../app.component.spec";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  likes:number = 0;
  categories = [...categories];
  show:Category[] = [];

  update(category:Category){
    if (!category.choose){
      this.show.push(category);
      category.choose = true;
    }
    else{
      this.show = this.show.filter(add => add != category)
      category.choose = false;
    }
  }
  ngOnInit() {
    for (let i of categories) {
      if (i.choose) {
        this.show.push(i)
      }
    }
    for (let i of products){
        if (i.likes){
            this.likes++;
        }
    }
  }
  like(increase:number){
      this.likes += increase;
  }
}
