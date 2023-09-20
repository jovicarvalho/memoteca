import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    //{
     // conteudo:'Passo informações para o Componente Filho',
      //autoria: 'Componente Pai',
      //modelo:'modelo3'
    //},
    //{
      //conteudo:'Minha propriedade é decorada com @input',
      //autoria: 'Componente Filho',
      //modelo:'modelo2'
    //},
    //{
      //conteudo:'Outro filho',
      //autoria: 'Sou da família de componentes',
    //  modelo:'modelo1'
    //}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
