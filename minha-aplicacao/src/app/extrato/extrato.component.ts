import { Component, OnInit } from '@angular/core';
import { Transacao } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

import { finalize, take } from 'rxjs/operators';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transacoes!: Array<Transacao>;

  estaCarregando!: boolean;
  erroNoCarregamento!: boolean;

  constructor(
    private extratoService: ExtratoService
    ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.carregarExtrato();
  }

  // tslint:disable-next-line: typedef
  carregarExtrato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.extratoService.getTransacoes()
    .pipe(
      take(1),
     finalize(() =>  this.estaCarregando = false)
    )
    .subscribe(response => this.onSucesso(response),
     error => this.onError(error),
     );
  }

  // tslint:disable-next-line: typedef
  onSucesso(response: Transacao[]){
    this.transacoes =  response;
  }

  // tslint:disable-next-line: typedef
  onError(error: any){
    this.erroNoCarregamento = true;
    console.error(error);
    }
}
