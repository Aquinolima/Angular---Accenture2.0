import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicios-diretivas',
  templateUrl: './exercicios-diretivas.component.html',
  styleUrls: ['./exercicios-diretivas.component.scss']
})
export class ExerciciosDiretivasComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


  
  deveExibir = true;

  trocarValor(){
    this.deveExibir = !this.deveExibir
  }

}
