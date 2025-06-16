import { Component, inject } from '@angular/core';
import { FavoritosService } from '../../service/favoritos.service';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-lista-favoritos',
  imports: [CommonModule, MatIcon],
  templateUrl: './ListaFavoritos.component.html',
  styles: ``,
})
export class ListaFavoritosComponent { 

  ListaFavoritos = inject(FavoritosService)

}
