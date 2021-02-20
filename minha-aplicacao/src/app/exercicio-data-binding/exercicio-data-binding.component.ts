import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Input() 'palavra': string;
  @Input() 'color': string;
 

  imgUrl = "https://i.pinimg.com/originals/8f/6c/14/8f6c142a7949e1c8cb61f89d37a90695.jpg";
  InitialValue = 'Valor Inicial';

  constructor() {   }

  ngOnInit(): void {
  }

  getImageUrl(){
    return this.imgUrl;
  }

 fazerAlgo() : void {
   console.log('Cliquei!');
 }

}
