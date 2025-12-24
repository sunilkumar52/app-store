import { Component, Input,Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.interface';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  @Input() productData!:IProduct;
  @Output() handleAddToCart= new EventEmitter<IProduct>();
  Math = Math;
  
  constructor(){}

  addToCart(){
    this.handleAddToCart.emit(this.productData);
    
  }
}
