import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../app.component.spec';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-project1-detail',
  templateUrl: './project1-detail.component.html',
  styleUrls: ['./project1-detail.component.css']
})
export class Project1DetailComponent implements OnInit{
  product: Product | undefined;
  constructor(private route: ActivatedRoute, private cartService: CartService) {}
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}


