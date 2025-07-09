import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Speed } from "./speed/speed";

@Component({
  selector: 'app-root',
  imports: [Speed],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'HernandezCarlos_Ex2_Contador';
}
