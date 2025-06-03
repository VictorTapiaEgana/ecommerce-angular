import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { JsonObject, Products } from '../types/productResponseType';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private http = inject(HttpClient)
  ListadoDeProductos = signal<Products[]>([])

  constructor() {
    this.CargarDatos('https://dummyjson.com/products?limit=20')
  }

  CargarDatos(url:string){
     
  this.http.get<JsonObject>(url,{
                            params:{}
                            }).subscribe(resp => {
                               this.ListadoDeProductos.set(resp.products)                             
                            })                 

  }

}
