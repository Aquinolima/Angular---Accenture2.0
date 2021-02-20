import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicios-diretivas',
  templateUrl: './exercicios-diretivas.component.html',
  styleUrls: ['./exercicios-diretivas.component.scss']
})
export class ExerciciosDiretivasComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  listaFrutas = [
    'Maçã',
    'Laranja',
    'Mamão',
    'Abacate'
  ];

  carrosLista = [
    {
    img: 'https://2.bp.blogspot.com/-Nt2wwwwGlUs/TmpdFOU9gSI/AAAAAAAAG4c/NIMf3jJfuGk/s1600/Palio-Weekend-ELX-Flex-Prata-lateral.JPG',    
    placa: 'AOX-1488',
    modelo: 'Pálio Weekend',
    cor: 'Prata',
    ano: 2007,
    alienado: false 
    },{
    img: 'https://cdn.vendautos.com.br/images/carros/gr/foto1-5caa3f0b245cd1e9f03c8ce786733718.jpg',  
    placa: 'ABC-1234',
    modelo: 'Chevrolet Corsa Classic',
    cor: 'Verde',
    ano: 2010,
    alienado: true 
    },{
    img: 'https://img1.icarros.com/dbimg/galeriaimgmodelo/8/8749_1.jpg',  
    placa: 'EBJ-4552',
    modelo: 'Renault Duster',
    cor: 'Cinza',
    ano: 2014,
    alienado: true 
    },{
    img: 'https://4.bp.blogspot.com/-eM7qtm6-CuA/Wbrh4QEVN_I/AAAAAAACo60/kNnzTJVHi_A8m52csjTWXi7BQ0ShpJTTQCLcBGAs/s1600/Honda-FIT-2018%2B%2528113%2529.jpg',  
    placa: 'hon-4173',
    modelo: 'Honda Fit',
    cor: 'Grafite',
    ano: 2018,
    alienado: false 
    }  
  ];

  
  deveExibir = true;

  trocarValor(){
    this.deveExibir = !this.deveExibir
  }

}
