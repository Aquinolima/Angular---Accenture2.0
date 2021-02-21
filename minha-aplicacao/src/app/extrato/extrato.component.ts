import { Component, OnInit } from '@angular/core';
import { Transacao } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transacoes!: Array<Transacao>;

  constructor(
    private extratoService: ExtratoService
    ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.extratoService.getTransacoes()
    .subscribe(response => {
      this.transacoes =  response;
    });
  }

}
