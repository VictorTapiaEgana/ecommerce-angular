import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { RouterLink } from '@angular/router';

import { CarritoDeCompraService } from '../../../service/CarritoDeCompra.service';
import { FavoritosService } from '../../../service/favoritos.service';

@Component({
  selector: 'nav-bar',
  imports: [ MatIconModule, MatBadgeModule, MatMenuModule, CommonModule, MatButton, MatDividerModule, RouterLink],
  templateUrl: './NavBar.component.html',
  styleUrl:    './NavBar.component.css'
})
export class NavBarComponent {

  CarritO = inject(CarritoDeCompraService)
  Favoritos = inject(FavoritosService)

  TotalProductosCarrito = computed(() =>
        this.CarritO.ArrayCarritoDeCompras()
                    .reduce((acc, item) => acc + item.cantidad, 0)
    
  )

  totalCarrito = computed(()=>
    this.CarritO.ArrayCarritoDeCompras()
                .reduce((acc,item)=> acc + (item.producto.price * item.cantidad),0)
  )

  totalFavoritos = computed(()=>
                  this.Favoritos.arregloDeFavoritos()
                  .reduce((acc)=> acc + 1, 0 )    
                  )

  
    
 }