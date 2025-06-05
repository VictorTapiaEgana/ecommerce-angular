import { Component, input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Products } from '../../types/productResponseType';
import { MatChipsModule } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-product-card',
  imports: [MatCardModule,MatChipsModule,MatIcon],
  templateUrl: './ProductCard.component.html',
  styles: ``,
})

export class ProductCardComponent {
  Producto = input.required<Products>()

  
 }
