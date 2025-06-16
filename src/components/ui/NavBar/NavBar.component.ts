import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';

import { CarritoDeCompraService } from '../../../service/CarritoDeCompra.service';
import { FavoritosService } from '../../../service/favoritos.service';

@Component({
  selector: 'nav-bar',
  imports: [ MatIconModule, MatBadgeModule, MatMenuModule, CommonModule, MatButton, MatDividerModule, RouterLink, MatTooltipModule],
  templateUrl: './NavBar.component.html',
  styleUrl:    './NavBar.component.css'
})

export class NavBarComponent {

  CarritO = inject(CarritoDeCompraService)
  Favoritos = inject(FavoritosService)
      
 }