import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';
import { Usuario } from '../shared/interfaces/usuario.interface';
import { AuthService } from '../shared/services/auth/auth.service';
import { LoginResponse } from './login.interfaces';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuario!: Usuario;
  token!: String;

  constructor(
    private authService: AuthService,
  ) { }

  logar(email: string, senha: string): Observable<LoginResponse> {
    if (email === 'aquinolima.thiago@gmail.com' && senha === '123') {
      return of({
        usuario: {
          nome: 'Thiago',
          sobrenome: 'Aquino',
          email: 'aquinolima.thiago@gmail.com',
        },
        token: "jsdjksajdklaskjkj asksjdkaj3",
      })
      .pipe(
        delay(2000),
        tap((response: { usuario: any, token: string; }) => {
          this.authService.setUsuario(response.usuario);
          this.authService.setToken(response.token);
         
        
        })
      );
    }

    return timer(3000).pipe(
      mergeMap(() => throwError('Usuário ou senha incorretos.'))
    );
  }
}