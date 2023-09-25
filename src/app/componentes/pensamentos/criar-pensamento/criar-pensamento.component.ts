import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  
  formulario!: FormGroup;

  constructor(
    private service:PensamentoService,
    private router: Router,
    private formbuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formulario = this.formbuilder.group({
      conteudo:['',Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])], 
      autoria:['',Validators.compose([
        Validators.required,
        Validators.minLength(3)
        ])],
      modelo: ['modelo1',[Validators.required]],
      favorito:[false]
    })
  }

  criarPensamento(){
    console.log(this.formulario.get('autoria')?.errors)
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(()=>{
        alert("Pensamento adicionado com sucesso!")
        this.router.navigate(['/listarPensamento'])}
      )
    }
  }
  
  cancelar(){
    alert("Pensamento Cancelado")
    this.router.navigate(['/listarPensamento'])
  }

  habilitarBotao(): string {
    return this.formulario.valid ? 'botao' : 'botao__desabilitado'
  }


}
