import { Component, computed, inject, signal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { ProductService } from '../../../service/productService.service';
import { CarritoDeCompraService } from '../../../service/CarritoDeCompra.service';

@Component({
  selector: 'nav-bar',
  imports: [MatIconModule,MatBadgeModule],
  templateUrl: './NavBar.component.html',
  styles: ``,
})
export class NavBarComponent {

  CarritO = inject(CarritoDeCompraService)

  TotalProductosCarrito = computed(() =>
        this.CarritO.ArrayCarritoDeCompras()
                    .reduce((acc, item) => acc + item.cantidad, 0)
    
  )


    
 }
