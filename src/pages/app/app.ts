import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/ui/NavBar/NavBar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'ecommerce';
}
