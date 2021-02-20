import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Input() 'palavra': string;
  @Input() 'color': string;

  @Output() 'clicado' = new EventEmitter();
 

  imgUrl = "https://i.pinimg.com/originals/8f/6c/14/8f6c142a7949e1c8cb61f89d37a90695.jpg";
  InitialValue = 'Valor Inicial';
  isDisabled = true;
  accessibilityText = 'Um texto acessível';

  valorDoInput = '';

  constructor() { 
    setTimeout(() => {
      this.isDisabled = false;
      console.log('isDisabled: ', this.isDisabled);
    }, 3000);
    }

  ngOnInit(): void {
  }

  getImageUrl(){
    return this.imgUrl;
  }

 onClick(event : any) : void {
   console.log('Cliquei!', event);
 }

 digitouAlgo(event : any){
   this.valorDoInput = event.target.value;
   console.log(event);
 }

mousePass(){
  console.log('Alguém Passou o Mouse!');
}

onClickBotaoEmissor(event : any){
  console.log('Devo emitir informações para o componente pai!', event);
  this.clicado.emit(event);
}

onValorAtualizadoNoContador(novoValor : any){
  console.log('onValorAtualizadoNoContador', novoValor);
}

}
