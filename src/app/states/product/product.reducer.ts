import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../shared/models/product.interface";
import * as ProductActions from './product.action'
export interface ProductState{
    products:IProduct[];
    error:string|null;
}

export const initialProductState:ProductState={
    products:[],
    error:null
}

export const productReducer=createReducer(
    initialProductState,
    on(ProductActions.loadProductSucess, (state,{productsA})=>{
        return{
            ...state,
            products:productsA,
            error:null
        }
    }),
    on(ProductActions.loadProductFailure,(state,{errorMessage})=>{
        return{
            ...state,
            error:errorMessage
        }
    })
)