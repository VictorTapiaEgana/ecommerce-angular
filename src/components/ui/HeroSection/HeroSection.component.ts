import { Component } from '@angular/core';
import { CategoryListComponent } from "../CategoryList/CategoryList.component";

@Component({
  selector: 'app-hero-section',
  imports: [CategoryListComponent],
  templateUrl: './HeroSection.component.html',
  styles: ``,
})
export class HeroSectionComponent { }
