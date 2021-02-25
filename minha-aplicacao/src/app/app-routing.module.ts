import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesContatoComponent } from './contatos/detalhes-contato/detalhes-contato.component';
import { Error404Component } from './error404/error404.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { LoginComponent } from './login/login.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao-esta-logado/nao-esta-logado.guard';


const routes: Routes = [{
  path: 'login', component: LoginComponent,
  canActivate: [NaoEstaLogadoGuard],
  }, {
    path: 'home', loadChildren: () => import('./home/home.module').then (m => m.HomeModule),
    canActivate: [EstaLogadoGuard],
}, {
  path: '', loadChildren: () => import('./home/home.module').then (m => m.HomeModule),
  canActivate: [EstaLogadoGuard],
}, {
  path: 'extrato', component: ExtratoComponent,
  canActivate: [EstaLogadoGuard],
}, {
  path: 'contatos', loadChildren: () => import('./contatos/contatos.module').then (m => m.ContatosModule),
  canActivate: [EstaLogadoGuard],
}, {
  path: 'contatos/:id', component: DetalhesContatoComponent,
  canActivate: [EstaLogadoGuard],
}, {
  path: '**', component: Error404Component,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
