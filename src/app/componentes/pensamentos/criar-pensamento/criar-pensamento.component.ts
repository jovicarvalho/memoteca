import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    conteudo:'',
    autoria:'',
    modelo: ''
  }

  constructor(
    private service:PensamentoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(()=>{
      alert("Pensamento adicionado com sucesso!")
      this.router.navigate(['/listarPensamento'])
    })
  }
  
  cancelar(){
    alert("Pensamento Cancelado")
    this.router.navigate(['/listarPensamento'])
  }

}
