import { Component, inject } from '@angular/core';
import {IProduct} from '../shared/models/product.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { Observable } from 'rxjs';
import { selectCartItems } from '../states/cart/cart.selector';
import { CommonModule } from '@angular/common';
import { App } from '../app';
import { decrementItemAction, incrementItemAction, removeItemAction } from '../states/cart/cart.action';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  store=inject(Store<AppState>);
  cartItems$=this.store.select(selectCartItems);
  cartTotal$=this.store.select(state=>state.cartState.totalPrice);
  handleRemoveProduct(productId:number){
    this.store.dispatch(removeItemAction({productId}));
  }
  handleIncreaseQuantity(productId:number){
    this.store.dispatch(incrementItemAction({productId}));
  }
  handleDecreaseQuantity(productId:number){
    this.store.dispatch(decrementItemAction({productId}));
  }
}
