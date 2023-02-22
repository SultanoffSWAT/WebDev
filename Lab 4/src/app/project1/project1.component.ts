import { Component } from '@angular/core';
import { products } from '../app.component.spec';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})

export class ProductListComponent {
  products = [...products];


  share(id:number) {
    window.open(`https://t.me/share/url?url=http://localhost:51791/products/http://localhost:51791/products/`+ id, 'blank')
    alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
