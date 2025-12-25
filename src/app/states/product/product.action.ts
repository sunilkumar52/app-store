import { createAction,props } from "@ngrx/store";
import {IProduct} from '../../shared/models/product.interface'

export const loadProduct = createAction('[ProductApi Service] loadProduct');
export const loadProductSucess=createAction('[ProductApi Service] loadProductSuccess',props<{productsA:IProduct[]}>());
export const loadProductFailure = createAction('[ProductApi Service] loadProductFailure',props<{errorMessage:string}>());



