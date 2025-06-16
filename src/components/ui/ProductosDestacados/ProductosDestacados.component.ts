import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../../service/productService.service';
import { Products } from '../../../types/productResponseType';
import { environment } from '../../../environments/environment.development';
import { ProductCardComponent } from "../../ProductCard/ProductCard.component";
import { CommonModule } from '@angular/common';
import { CardSkeletonComponent } from "../../CardSkeleton/CardSkeleton.component";

@Component({
  selector: 'app-productos-destacados',
  imports: [ProductCardComponent, CommonModule, CardSkeletonComponent],
  templateUrl: './ProductosDestacados.component.html',
  styles: ``,
})
export class ProductosDestacadosComponent { 

  http = inject(ProductService)
  ListaDeProductos = signal<Products[]>([])

  constructor(){
    this.cargarProductos()
  }

  cargarProductos(){
    this.http.CargarDatos<Products>(environment.API_PRODUCTOS,'products')
             .subscribe(productos =>{
               this.ListaDeProductos.set(productos) 
             }) 
  }

}
