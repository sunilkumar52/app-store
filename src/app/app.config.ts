import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { cartReducer } from './states/cart/cart.reducer';
import { provideEffects } from '@ngrx/effects';
import { productReducer } from './states/product/product.reducer';
import { ProductEffect } from './states/product/product.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      cartState: cartReducer
    }),
    provideState({name:'productstate',reducer:productReducer}),
    provideEffects(ProductEffect)
]
};
