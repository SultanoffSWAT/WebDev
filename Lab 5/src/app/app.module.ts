import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: '', component: CategoryComponent},
            {path: '', component: ProductListComponent},
            {path: 'products/:productId', component: ProductDetailsComponent},
            {path: 'cart', component: CartComponent},
            {path: 'shipping', component: ShippingComponent},
        ]),
        FormsModule
    ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ProductItemComponent,
    CategoryComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
