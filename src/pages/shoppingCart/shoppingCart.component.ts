import { Component, inject } from '@angular/core';
import { TablaComprasComponent } from "./tablaCompras/tablaCompras.component";
import { CarritoDeCompraService } from '../../service/CarritoDeCompra.service';
import { DatosDeDespachoComponent } from "./DatosDeDespacho/DatosDeDespacho.component";

@Component({
  selector: 'app-shopping-cart',
  imports: [TablaComprasComponent, DatosDeDespachoComponent],
  templateUrl: './shoppingCart.component.html',
  styles: ``,
})
export class ShoppingCartComponent {

  carrito = inject(CarritoDeCompraService)

} 
