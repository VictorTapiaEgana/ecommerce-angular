import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../../components/ui/NavBar/NavBar.component";
import { HeroSectionComponent } from "../../components/ui/HeroSection/HeroSection.component";

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, HeroSectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ecommerce';
}
