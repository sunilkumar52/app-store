import { createReducer } from "@ngrx/store";
import { IProduct } from "../../shared/models/product.interface";
import { addtoCartAction, decrementItemAction, incrementItemAction, removeItemAction } from "./cart.action";
import {on} from '@ngrx/store'

export interface CartState{
    products:IProduct[];
    totalPrice?: number;
}

export const initialCartState:CartState={
    products:[],
    totalPrice:0
}
export function calculateTotalPrice(products:IProduct[]):number{
    return products.reduce((total,products)=>total+(products.price*products.quantity),0);
}
export const cartReducer = createReducer(
    initialCartState,
    on(addtoCartAction,(state, {product})=>{
        const updatedState=[...state.products,product];
        return{
            ...state,
            products: updatedState,
            totalPrice:calculateTotalPrice(updatedState)
        }
    }),
    on(incrementItemAction, (state, {productId})=>{
        const updatedState=state.products.map(val=>{
            return  val.id===productId ? {...val, quantity: val.quantity + 1} : val;
        })
        return {
            ...state,
            products:updatedState,
            totalPrice:calculateTotalPrice(updatedState)
        }
    }),
    on(decrementItemAction,
        (state,{productId})=>{
            const updateState=state.products.map(product=>{
               return product.id===productId && product.quantity>1 ?{...product,quantity:product.quantity-1}:product;
        })
            return {
                ...state,
                products:updateState,
                totalPrice:calculateTotalPrice(updateState)
            }
        }
    ),
    on(removeItemAction,(state, {productId})=>{
        const updatedState= state.products.filter(product=> product.id!==productId);
        return {
            ...state,
            products:updatedState,
            totalPrice:calculateTotalPrice(updatedState)
        }
    })
)
