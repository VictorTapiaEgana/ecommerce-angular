import { Injectable, signal } from '@angular/core';

interface favType {
  id:number
}

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  arregloDeFavoritos = signal<favType[]>([])

  
  AddFavoritos(id:number){

    const esFavorito = this.arregloDeFavoritos().findIndex(fav => fav.id  === id )

    if ( esFavorito === -1 ){
      this.arregloDeFavoritos.update(prev => [...prev, { id }])
    }
    
  }

}
