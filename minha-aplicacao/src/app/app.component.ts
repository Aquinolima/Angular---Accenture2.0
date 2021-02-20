 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pudim = "Teste de property binding!";
  favoriteColor = "Azul Centaurea"
  titulo = "Seja Bem-Vindo por Property Binding!"
  
  constructor(){        // Função Construtora, é a primeira função a ser executada quando uma classe é iniciada, instanciada. 
                        // Ou seja logo que essa classe surgir irá passar por esse construtor.
  console.log('Passei por Aqui');
  }

  eventoRecebido(event : any){
    console.log('AppComponent: EVENTO RECEBIDO', event);
  }
}
