import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductList } from "../shared/product-list/product-list";
import { IProduct } from '../shared/models/product.interface';
import { ProductApi } from '../shared/service/product-api/product-api';

@Component({
  selector: 'app-items-list',
  imports: [CommonModule, ProductList],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList {
  data!:Observable<IProduct[]>;
  constructor(private productApi:ProductApi, private http:HttpClient){
    this.http.get<IProduct>('https://fakestoreapi.com/products').subscribe(val=>console.log(val));
    this.data= productApi.getproducts();
  }

}