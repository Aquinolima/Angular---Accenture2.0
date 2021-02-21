import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss']
})
export class ExercicioPipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  filme = {
    titulo: 'Harry Potter - A pedra filosofal',
    estrelas: 4.45685698,
    precoAluguel: 15.45,
    dataLancamento: new Date(2019, 12, 30),    
  };

}
