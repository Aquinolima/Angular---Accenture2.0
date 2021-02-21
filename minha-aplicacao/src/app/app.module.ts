import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ExercicioDataBindingComponent } from './shared/exercicios/exercicio-data-binding/exercicio-data-binding.component';
import { ContadorComponent } from './shared/exercicios/contador/contador.component';
import { ExerciciosDiretivasComponent } from './shared/exercicios/exercicios-diretivas/exercicios-diretivas.component';
import { ExercicioNgclassComponent } from './shared/exercicios/exercicio-ngclass/exercicio-ngclass.component';
import { ExercicioPipesComponent } from './shared/exercicios/exercicio-pipes/exercicio-pipes.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LoginComponent } from './login/login.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { Error404Component } from './error404/error404.component';

import { HttpClientModule } from '@angular/common/http';
registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ExercicioDataBindingComponent,
    ContadorComponent,
    ExerciciosDiretivasComponent,
    ExercicioNgclassComponent,
    ExercicioPipesComponent,
    LoginComponent,
    ExtratoComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
