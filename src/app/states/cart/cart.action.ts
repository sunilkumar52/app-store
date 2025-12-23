import { createAction,props } from "@ngrx/store";
import { IProduct } from "../../shared/models/product.interface";

export const addtoCartAction= createAction('[Cart Component] AddToCart', props<{product:IProduct}>());
export const incrementItemAction = createAction('[Cart Component] IncrementItem', props<{productId:any}>());
export const decrementItemAction = createAction('[Cart Component] DecrementItem', props<{productId:any}>());
export const removeItemAction= createAction('[Cart Component] RemoveItem',props<{productId:number}>());