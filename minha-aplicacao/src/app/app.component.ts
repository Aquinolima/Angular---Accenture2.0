import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = "Angular---Accenture2.0"

  palavra = 'CARRO';
  favoriteColor = 'green';

  constructor() { }

  eventoRecebido($event) {
    console.log('AppComponent: EVENTO RECEBIDO!', $event);
  }

}
