import { Component, OnInit, Input } from '@angular/core';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id:0,
    conteudo:'I love Angular',
    autoria: 'Joao',
    modelo:'modelo3',
    favorito: false
  }

  @Input() listaFavoritos: Pensamento[] = [];

  constructor(private service:PensamentoService) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >=256){
      return 'pensamento-g'
    }
    return 'pensamento-p'     
  }

  mudarIconeFavorito():string{
    return !this.pensamento.favorito ? "inativo" : "ativo"
  }

  atualizarFavoritos(){
    this.service.mudarFavorito(this.pensamento).subscribe(()=>{
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento),1) // esse splice serve para remover o pensamento da lista quando "desfavoritamos" ele
    });
  }


}
