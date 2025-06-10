import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-datos-de-despacho',
  imports: [MatButton, MatFormField,MatInputModule,FormsModule,MatIcon],
  templateUrl: './DatosDeDespacho.component.html',  
})
export class DatosDeDespachoComponent { }
