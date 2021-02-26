import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ContatosRoutingModule } from './contatos-routing.module';
import { DetalharContatoComponent } from './detalhar-contato/detalhar-contato.component';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';


@NgModule({
  declarations: [
    ListarContatosComponent,
    DetalharContatoComponent,
    EditarContatoComponent,
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContatosModule { }
