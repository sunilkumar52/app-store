import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'/items', pathMatch:'full'},
    {path:'items', loadComponent: ()=>(import('./items-list/items-list')).then(a=>a.ItemsList)},
    {path:'cart',loadComponent:()=>(import('./cart/cart')).then(a=>a.Cart)}
];
