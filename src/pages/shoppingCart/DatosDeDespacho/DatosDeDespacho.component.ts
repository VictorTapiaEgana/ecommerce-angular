import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CarritoDeCompraService } from '../../../service/CarritoDeCompra.service';

@Component({
  selector: 'app-datos-de-despacho',
  imports: [MatButton, MatFormField,MatInputModule,FormsModule,MatIcon,RouterLink],
  templateUrl: './DatosDeDespacho.component.html',  
})

export class DatosDeDespachoComponent {

  carrito = inject(CarritoDeCompraService)

}
