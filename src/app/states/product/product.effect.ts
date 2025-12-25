import { Injectable,inject} from "@angular/core";
import { ProductApi } from "../../shared/service/product-api/product-api";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ProductActions from './product.action'
import { catchError, switchMap,map,of } from "rxjs";
@Injectable()
export class ProductEffect{
    private api=inject(ProductApi);

    private action$=inject(Actions);

    loadProducts$=createEffect(
        ()=>(this.action$.pipe(
            ofType(ProductActions.loadProduct),
            switchMap(()=>this.api.getproducts().pipe(
                map((response)=>ProductActions.loadProductSucess({productsA:response})),
                catchError((err:{message:string})=>of(ProductActions.loadProductFailure({errorMessage:`Failed to ferch the data ${err}`})))
            ))
        ))
    )
}