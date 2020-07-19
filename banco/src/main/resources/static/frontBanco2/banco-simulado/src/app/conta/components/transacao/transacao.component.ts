import { Component, OnInit } from '@angular/core';
import { FlexAlignStyleBuilder } from '@angular/flex-layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatRadioButton, MatRadioChange } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Cliente } from './../../../cliente/models/cliente';
import { ClienteService } from './../../../cliente/services/cliente.service';
import { CpfValidator } from './../../../shared/validators/cpf.validator';

@Component({
  selector: 'app-transacao',
  templateUrl: './transacao.component.html',
  styleUrls: ['./transacao.component.css']
})
export class TransacaoComponent implements OnInit {

  form: FormGroup;
  isDestinatario: boolean = true;
  isFormHabilitar: boolean = false;

  private _transacoes:{
    valor: string,
    desc: string
  }[] = [
    {valor: 'sacar', desc: 'Sacar'},
    {valor: 'transferir', desc: 'Transferir'},
    {valor: 'depositar', desc: 'Depositar'}
  ];

  private _destinatario:{
    valor: string,
    desc: string
  }[] = [
    {valor: 'sim', desc: 'Própio favorecido'},
    {valor: 'nao', desc: 'Outra pessoa'}
  ];

  constructor(
    private fb: FormBuilder,
 //   private router: Router,
  //  private clienteService :ClienteService,
    private sncakBar :MatSnackBar
  ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

 
  depositar(){
    
  }

  tipoTransacao(event: MatRadioChange){
    if(event.value != 'sacar'){
      this.isDestinatario = false;
      this.isFormHabilitar = true;
    }else{
      this.isDestinatario = true;
      this.isFormHabilitar = false;
    }
  }

  tipoDestinatario(event: MatRadioChange){
    console.log(event.value);
  }

  gerarForm(){
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(10)]],
      cpf: ['', [Validators.required, CpfValidator]],
      conta: ['', [Validators.required, Validators.minLength(4)]],
      agencia: ['', Validators.required],
      valor: ['', [Validators.required]],
      transacoes: ['', []]
    });
  }

  salvar(){
    
  }

  get transacoes(){
    return this._transacoes;
  }

  get destinatarios(){
    return this._destinatario;
  }
  
  //getCliente(){}
  // getCliente(cpf: string): Cliente{
  //   const cliente$ = this.clienteService.getCliente(cpf).subscribe(
  //       dados=> {
  //         const cliente = dados.Cliente;
  //       },
  //       err => {
  //         const msg: string = "Erro obtendo cliente";
  //         this.sncakBar.open(msg, "Erro", { duration: 5000 });
  //         this.router.navigate(['/login']);
  //       }
  //   );
  //}


}
