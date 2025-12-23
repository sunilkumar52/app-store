import { createReducer } from "@ngrx/store";
import { IProduct } from "../../shared/models/product.interface";
import { addtoCartAction, decrementItemAction, incrementItemAction, removeItemAction } from "./cart.action";
import {on} from '@ngrx/store'

export interface CartState{
    products:IProduct[];
}

export const initialCartState:CartState={
    products:[]
}

export const cartReducer = createReducer(
    initialCartState,
    on(addtoCartAction,(state, {product})=>{
        console.log(state);
        const updatedState=[...state.products,product];
        return{
            ...state,
            products: updatedState,
        }
    }),
    on(incrementItemAction, (state, {productId})=>{

        const updatedState=state.products.map(val=>{
            if(val.id===productId){
                val.quantity++;
            }
            return val;
        })
        return {
            ...state,
            products:updatedState
        }
    }),
    on(decrementItemAction,
        (state,{productId})=>{
            const updateState=state.products.map(product=>{
                if(product.id===productId){
                    product.quantity--;
                }
                return product;
            })
            return {
                ...state,
                products:updateState
            }
        }
    ),
    on(removeItemAction,(state, {productId})=>{
        const updatedState= state.products.filter(product=> product.id!==productId);
        return {
            ...state,
            products:updatedState
        }
    })
)
