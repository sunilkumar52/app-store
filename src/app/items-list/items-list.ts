import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductList } from "../shared/product-list/product-list";
import { IProduct } from '../shared/models/product.interface';

@Component({
  selector: 'app-items-list',
  imports: [CommonModule, ProductList],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList {
  data!:Observable<IProduct[]>;
  constructor(private http:HttpClient){
    this.data= this.http.get<IProduct[]>('https://fakestoreapi.com/products');
    console.log(this.data);
  }
}