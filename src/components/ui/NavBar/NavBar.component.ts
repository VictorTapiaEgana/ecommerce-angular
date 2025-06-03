import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { ProductService } from '../../../service/productService.service';

@Component({
  selector: 'nav-bar',
  imports: [MatIconModule,MatBadgeModule],
  templateUrl: './NavBar.component.html',
  styles: ``,
})
export class NavBarComponent {

  clientService = inject(ProductService)  

 }
