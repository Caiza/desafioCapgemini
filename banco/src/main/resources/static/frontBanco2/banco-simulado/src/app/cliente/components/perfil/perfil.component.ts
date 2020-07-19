import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CpfValidator } from './../../../shared/validators/cpf.validator';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

 form: FormGroup;

  constructor(
   private fb: FormBuilder
  ) { }

  ngOnInit(): void {
   this.gerarForm();
  }

  gerarForm(){
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, CpfValidator]],
    });
  }

  alterar(){
    
  }

}
