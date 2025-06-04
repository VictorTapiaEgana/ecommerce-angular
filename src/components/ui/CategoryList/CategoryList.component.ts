import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../../service/productService.service';
import { environment } from '../../../environments/environment.development';
import { CategoriaResponse } from '../../../types/categoriasResponseType';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-category-list',
  imports: [MatChipsModule],
  templateUrl: './CategoryList.component.html',
  styles: ``,
})

export class CategoryListComponent { 
  
  http = inject(ProductService)

  API_Categorias = environment.API_CATEGORIAS
  ListadoDeCategorias = signal<CategoriaResponse[]>([])

  constructor(){
    this.getTodasLasCategorias()   
  }

  getTodasLasCategorias(){
    
      this.http.CargarDatos<CategoriaResponse>(this.API_Categorias)
               .subscribe(categoria => 
                 this.ListadoDeCategorias.set(categoria) 
               )
    
  }

 }
