import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { TablaComprasComponent } from "./tablaCompras/tablaCompras.component";
import { CarritoDeCompraService } from '../../service/CarritoDeCompra.service';

// import { DatosDeDespachoComponent } from "./DatosDeDespacho/DatosDeDespacho.component";
// import { ListaFavoritosComponent } from "../../components/ListaFavoritos/ListaFavoritos.component";
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

export class AppModule {
}

@Component({
  selector: 'app-shopping-cart',
  imports: [RouterLink,CommonModule,  MatButton, TablaComprasComponent, MatIcon, MatTooltipModule ],
  templateUrl: './shoppingCart.component.html',
  styles: ``,
})
export class ShoppingCartComponent {

  carrito = inject(CarritoDeCompraService)    

} 
