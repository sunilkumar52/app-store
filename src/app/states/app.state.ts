import * as CartReducer from './cart/cart.reducer';
import { ProductState } from './product/product.reducer';

export interface AppState{
    cartState:CartReducer.CartState;
    productstate:ProductState;
}