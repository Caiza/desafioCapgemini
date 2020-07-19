import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { AtualizacaoComponent } from './components/atualizacao/atualizacao.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ListagemComponent } from './components/listagem/listagem.component';



@NgModule({
  declarations: [ListagemComponent, CadastroComponent, AtualizacaoComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class AdminModule { }
