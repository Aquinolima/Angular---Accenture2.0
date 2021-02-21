 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pudim = "Teste de property binding!";
  favoriteColor = "Azul Centaurea"
  titulo = "Angular---Accenture2.0"
 
  
  constructor(){}
}
