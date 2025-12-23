import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProduct } from '../../models/product.interface';
import {map} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductApi {
  http=inject(HttpClient) ;
  constructor(){}

  getproducts(){
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products').pipe(
      map((products)=>{
        return products.map((product)=>{
          return {...product,quantity:1}
        })
      })
    )
  }
}
