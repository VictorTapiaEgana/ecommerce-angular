import { Component, inject } from '@angular/core';
import { FavoritosService } from '../../service/favoritos.service';

import { MatIcon } from '@angular/material/icon';
import { Products } from '../../types/productResponseType';

@Component({
  selector: 'app-user-profile',
  imports: [ MatIcon ],
  templateUrl: './userProfile.component.html',
  styles: ``,
})

export class UserProfileComponent { 

  listaFav = inject(FavoritosService)

  eliminarFavorito(fav:Products){
    this.listaFav.AddFavoritos(fav)
  }
}