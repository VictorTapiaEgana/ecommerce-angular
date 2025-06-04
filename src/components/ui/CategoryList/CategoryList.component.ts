import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../../service/productService.service';
import { environment } from '../../../environments/environment.development';
import { Products } from '../../../types/productResponseType';

@Component({
  selector: 'app-category-list',
  imports: [],
  templateUrl: './CategoryList.component.html',
  styles: ``,
})
export class CategoryListComponent { 
  
  http = inject(ProductService)

  API_Categorias = environment.API_CATEGORIAS
  ListadoDeCategorias = signal<Products[]>([])

  constructor(){

  }



  getTodasLasCategorias(){
    this.ListadoDeCategorias.set(this.http.CargarDatos(this.API_Categorias))
  }
 }
