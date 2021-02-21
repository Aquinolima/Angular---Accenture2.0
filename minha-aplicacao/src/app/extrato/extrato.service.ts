import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  constructor(
    private http: HttpClient,
    ) { }
  // tslint:disable-next-line: typedef
  getTransacoes() {
    return  this.http.get('https://my-json-server.typicode.com/vitorfgsantos/fake-api/transacoes');

  }
}
