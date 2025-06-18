import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/ui/NavBar/NavBar.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'ecommerce';
}
