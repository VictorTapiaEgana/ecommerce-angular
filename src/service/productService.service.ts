import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private http = inject(HttpClient) 

  cargandoProductos = signal<boolean>(false)

  CargarDatos<T>(url:string,key?:string):Observable<T[]>{
    
    this.cargandoProductos.set(true)

    return this.http.get<any>(url)
                    .pipe(
                        map(resp => key 
                                    ? resp[key] as T[]
                                    : resp as T[] ),
                        finalize(()=>{ this.cargandoProductos.set(false)})
                    )                                   
  }

}
