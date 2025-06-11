import { Component, inject } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CarritoDeCompraService } from '../../../service/CarritoDeCompra.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datos-de-despacho',
  imports: [ CommonModule, MatButton, MatFormField,MatInputModule,FormsModule,
             MatIcon,RouterLink, ReactiveFormsModule],
  templateUrl: './DatosDeDespacho.component.html',  
})

export class DatosDeDespachoComponent {

  carrito = inject(CarritoDeCompraService)

  fb = inject(FormBuilder)

  formulario  = this.fb.group({
      nombre:['',Validators.required],
      apellidos:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      direccion:['',Validators.required],
      ciudad:['',Validators.required]
  })

  ValidarDatos(){
    
    console.log(this.formulario.controls.nombre.errors)

  }

}
