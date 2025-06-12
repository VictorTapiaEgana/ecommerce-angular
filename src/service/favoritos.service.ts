import { Injectable, signal } from '@angular/core';
import { Products } from '../types/productResponseType';

@Injectable({
  providedIn: 'root'
})

export class FavoritosService {  

  arregloDeFavoritos = signal<Products[]>([])

  
  AddFavoritos(producto:Products):boolean{    

    const esFavorito = this.arregloDeFavoritos().some(fav => fav.id  === producto.id )

    if ( !esFavorito ){

      this.arregloDeFavoritos.update(prev => [...prev,  producto ])
      return true

    } else{
      
      let copiaFavoritos = this.arregloDeFavoritos()

      let arregloFiltrado = copiaFavoritos.filter(fav => fav.id != producto.id)

      this.arregloDeFavoritos.update(arr => arregloFiltrado)
      
      return false

    }    
    
  }

}
