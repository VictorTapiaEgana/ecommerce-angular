import { Routes } from '@angular/router';
import { ShoppingCartComponent } from '../shoppingCart/shoppingCart.component';
import { HaomepageComponent } from '../haomepage/haomepage.component';

export const routes: Routes = [    
    {path:"", component:HaomepageComponent},
    { path:'shoppingcart', component: ShoppingCartComponent }
];
