import { Injectable, signal } from '@angular/core';
import { ProductosCarritoType, Products } from '../types/productResponseType';

@Injectable({
  providedIn: 'root'
})

export class CarritoDeCompraService {  

  ArrayCarritoDeCompras = signal<ProductosCarritoType[]>([])

  agregarAlCarrito(productoNuevo:Products,cantidad:number){

    const CarritoActual  = this.ArrayCarritoDeCompras()

    const Existe = this.ArrayCarritoDeCompras()
                       .findIndex(item => item.producto.id  === productoNuevo.id )
    
    if (Existe === -1 ){       

       this.ArrayCarritoDeCompras.set([...CarritoActual, 
                                        { producto:productoNuevo,
                                          cantidad
                                        }
                                     ])
      
    } else {

      const nuevoCarrito = [...CarritoActual]

      nuevoCarrito[Existe] = { ...nuevoCarrito[Existe],
                              cantidad:CarritoActual[Existe].cantidad + cantidad
                             }

      this.ArrayCarritoDeCompras.update(prev => nuevoCarrito)                
    }    
     
  }

  limpiarCarrito(){
    this.ArrayCarritoDeCompras.set([])
  }

}