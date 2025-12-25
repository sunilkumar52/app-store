import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductList } from "../shared/product-list/product-list";
import { IProduct } from '../shared/models/product.interface';
import { ProductApi } from '../shared/service/product-api/product-api';
import { Store } from '@ngrx/store';
import { addtoCartAction } from '../states/cart/cart.action';
import { AppState } from '../states/app.state';
import { loadProduct } from '../states/product/product.action';
import { selectAllProducts, selectError } from '../states/product/product.selector';

@Component({
  selector: 'app-items-list',
  imports: [CommonModule, ProductList],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList {
  data!:Observable<IProduct[]>;
  error!:Observable<string|null>;
  constructor(private productApi:ProductApi, private http:HttpClient, private store:Store<AppState>){
    // this.data= productApi.getproducts();
    this.store.dispatch(loadProduct());
    this.data=this.store.select(selectAllProducts);
    this.error=this.store.select(selectError);
  }
  addItem(product:IProduct){
    this.store.dispatch(addtoCartAction({product}));
    console.log('Added to cart');
  }
}