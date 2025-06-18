import { Routes } from '@angular/router';
import { ShoppingCartComponent } from '../shoppingCart/shoppingCart.component';
import { HaomepageComponent } from '../haomepage/haomepage.component';
import { Component } from '@angular/core';
import { UserProfileComponent } from '../../components/userProfile/userProfile.component';

export const routes: Routes = [    
    { path:"", component:HaomepageComponent},
    { path:'shoppingcart', component: ShoppingCartComponent },
    { path:'userprofile', component: UserProfileComponent }
];
