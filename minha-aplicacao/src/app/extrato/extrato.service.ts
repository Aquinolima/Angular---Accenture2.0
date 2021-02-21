import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transacao } from './extrato.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  constructor(
    private http: HttpClient,
    ) { }
  // tslint:disable-next-line: typedef
  getTransacoes() {
    return  this.http.get<Transacao[]>('https://my-json-server.typicode.com/vitorfgsantos/fake-api/transacoes');

  }
}
