import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import { CarritoDeCompraService } from '../../../service/CarritoDeCompra.service';

@Component({
  selector: 'nav-bar',
  imports: [ MatIconModule, MatBadgeModule, MatMenuModule, CommonModule, MatButton, MatDividerModule],
  templateUrl: './NavBar.component.html',
  styleUrl:    './NavBar.component.css'
})
export class NavBarComponent {

  CarritO = inject(CarritoDeCompraService)

  TotalProductosCarrito = computed(() =>
        this.CarritO.ArrayCarritoDeCompras()
                    .reduce((acc, item) => acc + item.cantidad, 0)
    
  )

  totalCarrito = computed(()=>
    this.CarritO.ArrayCarritoDeCompras()
                .reduce((acc,item)=> acc + (item.producto.price * item.cantidad),0)
  )
    
 }