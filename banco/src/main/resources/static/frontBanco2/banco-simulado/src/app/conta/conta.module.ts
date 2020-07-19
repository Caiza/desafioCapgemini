import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ExtratoModule } from './../extrato/extrato.module';
import { SharedModule } from './../shared/shared.module';
import { ContaTemplateComponent } from './components/conta-template.component';
import { ContaComponent } from './components/conta/conta.component';
import { TransacaoComponent } from './components/transacao/transacao.component';




@NgModule({
  declarations: [ContaComponent, TransacaoComponent, ContaTemplateComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatInputModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatRadioModule,
    ExtratoModule,
    MatSliderModule,
    SharedModule
  ]
})
export class ContaModule { }
