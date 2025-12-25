import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { CartState } from "./cart.reducer";
export const selectCartState = (state:AppState)=>(state.cartState)
export const selectCartItems = createSelector(
    selectCartState,
    (state: CartState)=>{return state.products}
)
export const selectTotalPrice= createSelector(
    selectCartState,
    (state:CartState)=>(
         state.totalPrice
    )
)