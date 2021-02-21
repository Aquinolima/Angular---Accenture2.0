import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/internal/operators/finalize';
import { take } from 'rxjs/internal/operators/take';
import { Contato } from '../contatos.interfaces';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.scss']
})
export class DetalhesContatoComponent implements OnInit {
  [x: string]: any;

  contato!: Contato;

  estaCarregando!: boolean;
  erroNoCarregamento!: boolean;
  

  constructor(
    private route: ActivatedRoute,
    private contatosService: ContatosService,
    private router: Router,
  ) { }

  ngOnInit(){
        this.carregarContato();
  }

  carregarContato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    const idContato = this.route.snapshot.paramMap.get('id');
    this.contatosService.getContato(Number(idContato))
      .pipe(
      take(1),
      finalize(() => this.estaCarregando = false)
      )
    .subscribe(
      response => this.onSuccess(response),
      // error => this.onError(error),
    )};

    onError(error: any) {
      this.erroNoCarregamento = true;
      console.error(error);
    }

    onSuccess(response: Contato){
      this.contato = response;
    }

    voltar(){
      this.router.navigate(['contatos'])

    }

}
