import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datos-de-despacho',
  imports: [MatButton, MatFormField,MatInputModule,FormsModule],
  templateUrl: './DatosDeDespacho.component.html',
  // styles: [`
  //   input {
  //     height:'5px' !important;
  //   }
  // `],
})
export class DatosDeDespachoComponent { }
