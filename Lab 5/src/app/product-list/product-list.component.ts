import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product, products} from '../app.component.spec';
import { Category } from '../categories';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent{
  @Input() status !: Category[];
  @Output() numLiked = new EventEmitter();
  products = products;
  inList(category:string){
    for (let i of this.status){
      if (i.name == category){
        return true;
      }
    }
    return false;
  }

  share(id:number) {
    window.open(`https://t.me/share/url?url=http://localhost:4200/products/http://localhost:4200/products/`+ id, "_blank")
    // alert('The product has been shared!');
  }

  show(item:any){
    for(let product of products){
      if(product.category == item){
      }

    }

  }
  like(product:Product){
    if (!product.likes){
      product.likes = true;
      this.numLiked.emit(1);
    }
    else {
      product.likes = false;
      this.numLiked.emit(-1);
    }
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  delete(product:Product){
    product.visible=false;
    if (product.likes){
      product.likes = false;
      this.numLiked.emit(-1);
    }
  }
}


