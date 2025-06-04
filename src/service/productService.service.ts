import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private http = inject(HttpClient) 

  CargarDatos<T>(url:string,key?:string):Observable<T[]>{
     
    return this.http.get<any>(url)
                    .pipe(
                        map(resp => key 
                                    ? resp[key] as T[]
                                    : resp as T[] )
                    )               
    }

}
