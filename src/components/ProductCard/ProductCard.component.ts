import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { Products } from '../../types/productResponseType';
import { MatChipsModule } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule }  from '@angular/material/button';
import { CarritoDeCompraService } from '../../service/CarritoDeCompra.service';
import { FavoritosService } from '../../service/favoritos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-card',
  imports: [ MatCardModule, MatChipsModule, MatIcon, MatInputModule, MatButtonModule, CommonModule ],
  templateUrl: './ProductCard.component.html',
  styleUrl :   './ProductCard.component.css'
})

export class ProductCardComponent {
  
  Producto = input.required<Products>()
  favService = inject(FavoritosService)

  CarritoDeCompras  = inject(CarritoDeCompraService)

  esProductoFavorito(id:number){

    const esFav = this.favService.arregloDeFavoritos()
                                 .some(item => item.id === id) 

    return esFav
   
  }

  AddFavoritos(producto:Products){
    
    this.favService.AddFavoritos(producto) && this.animacionCarrito()

  }

  animacionCarrito() {
    Swal.fire({
      title: '¡Agregado a favoritos!',
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      background: '#fff',
      color: '#333',
      html: `<img src="/sparks.gif" style="width:60px; height:60px;" />`,
      icon: undefined, 
      didOpen: () => {
        const content = Swal.getHtmlContainer();
        if (content) {
          content.style.display = 'flex';
          content.style.alignItems = 'center';
          content.style.justifyContent = 'center';
        }
      }
    });
  }


 }
