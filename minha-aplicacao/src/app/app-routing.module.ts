import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './contatos/contatos.component';
import { DetalhesContatoComponent } from './contatos/detalhes-contato/detalhes-contato.component';
import { Error404Component } from './error404/error404.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{
  path: 'login', component: LoginComponent,
}, {
  path: 'home', component: HomeComponent,
}, {
  path: '', component: HomeComponent,
}, {
  path: 'extrato', component: ExtratoComponent,
}, {
  path: 'contatos', component: ContatosComponent,
}, {
  path: 'contatos/:id', component: DetalhesContatoComponent,
}, {
  path: '**', component: Error404Component,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
