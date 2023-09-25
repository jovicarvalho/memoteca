import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  paginaAtual:number = 1;
  listaPensamentos : Pensamento[] = [
  ];
  filtro:string = ''
  haMaisPensamentos: boolean = true;
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = [] ;
  titulo:string = "Meu Mural";

  constructor(
    private service: PensamentoService,
    private router: Router
    ) { }

  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual, this.filtro,this.favoritos)
    .subscribe(listaPensamentos =>{
      this.listaPensamentos.push(...listaPensamentos);
      if(!listaPensamentos.length){
        this.haMaisPensamentos = false
      }
    })
  }

  listarFavoritos(){
    this.titulo = "Meus Favoritos";
    this.favoritos = true;
    this.service.listar(this.paginaAtual, this.filtro,this.favoritos)
    .subscribe((listaPensamentos)=>{
      this.listaPensamentos = listaPensamentos
      this.listaFavoritos = listaPensamentos
    })
  }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos)=>{
      this.listaPensamentos = listaPensamentos
    })
  }

  listagemGeral(){ //recarrega o componente
    this.favoritos = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])

  }

  penquisarPensamentos(){
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro,this.favoritos)
    .subscribe(listaPensamentos=>{
      this.listaPensamentos = listaPensamentos
    })
  }

}
