import { Component, input } from '@angular/core';
import { ProductosCarritoType  } from '../../../types/productResponseType';

@Component({
  selector: 'app-tabla-compras',
  imports: [],
  templateUrl: './tablaCompras.component.html',
  styles: ``,
})
export class TablaComprasComponent { 

  carrito = input.required<ProductosCarritoType[]>()
  
}
