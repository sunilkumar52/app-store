import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductList } from "../shared/product-list/product-list";
import { IProduct } from '../shared/models/product.interface';
import { ProductApi } from '../shared/service/product-api/product-api';
import { Store } from '@ngrx/store';
import { addtoCartAction } from '../states/cart/cart.action';

@Component({
  selector: 'app-items-list',
  imports: [CommonModule, ProductList],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList {
  data!:Observable<IProduct[]>;
  constructor(private productApi:ProductApi, private http:HttpClient, private store:Store<{cart:{products:IProduct[]}}>){
    this.http.get<IProduct>('https://fakestoreapi.com/products').subscribe(val=>console.log(val));
    this.data= productApi.getproducts();
  }
  addItem(product:IProduct){
    this.store.dispatch(addtoCartAction({product}));
    console.log('Added to cart');
  }
}