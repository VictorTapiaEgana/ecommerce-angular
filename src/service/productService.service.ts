import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { JsonObject, Products } from '../types/productResponseType';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private http = inject(HttpClient)
  ListadoDeProductos = signal<Products[]>([])

  constructor() {
    this.CargarDatos('https://dummyjson.com/products?limit=20')
  }

  CargarDatos(url:string):Observable<Products[]>{
     
    return this.http.get<JsonObject>(url)
                    .pipe(
                        map(resp => resp.products)
                    )               
    }

}
