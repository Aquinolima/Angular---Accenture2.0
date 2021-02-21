import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-ngclass',
  templateUrl: './exercicio-ngclass.component.html',
  styleUrls: ['./exercicio-ngclass.component.scss']
})
export class ExercicioNgclassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mudaCor = false;

  tornarVerde(){
    this.mudaCor = true;
  }
  
  tornarVermelho(){
    this.mudaCor = false;
  }

}
