import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../components/ui/HeroSection/HeroSection.component";
import { ProductosDestacadosComponent } from "../../components/ui/ProductosDestacados/ProductosDestacados.component";

@Component({
  selector: 'app-haomepage',
  imports: [HeroSectionComponent, ProductosDestacadosComponent],
  templateUrl: './haomepage.component.html',
  styles: ``,
})
export class HaomepageComponent { }
