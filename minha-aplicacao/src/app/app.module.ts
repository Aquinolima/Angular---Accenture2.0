import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ExercicioDataBindingComponent } from './exercicio-data-binding/exercicio-data-binding.component';
import { ContadorComponent } from './exercicio-data-binding/contador/contador.component';
import { ExerciciosDiretivasComponent } from './exercicios-diretivas/exercicios-diretivas.component';
import { ExercicioNgclassComponent } from './exercicio-ngclass/exercicio-ngclass.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ExercicioDataBindingComponent,
    ContadorComponent,
    ExerciciosDiretivasComponent,
    ExercicioNgclassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
