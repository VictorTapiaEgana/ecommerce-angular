import { Injectable, signal } from '@angular/core';
import { Products } from '../types/productResponseType';

@Injectable({
  providedIn: 'root'
})

export class FavoritosService {  

  arregloDeFavoritos = signal<Products[]>([])

  
  AddFavoritos(producto:Products){

    const esFavorito = this.arregloDeFavoritos().findIndex(fav => fav.id  === producto.id )

    if ( esFavorito === -1 ){
      this.arregloDeFavoritos.update(prev => [...prev,  producto ])
    }    
    
  }

}
