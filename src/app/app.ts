import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ItemsList } from './items-list/items-list';
import { Observable } from 'rxjs';
import { IProduct } from './shared/models/product.interface';
import { Store } from '@ngrx/store';
import { selectCartItems } from './states/cart/cart.selector';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  cartItems$!:Observable<IProduct[]>;

  constructor(private store:Store<{cartState:{products:IProduct[]}}>){
    this.cartItems$=this.store.select(state=>state.cartState.products);
  }


}
