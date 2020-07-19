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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../../shared/shared.module';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { CadastroComponent } from './components/cadastro.component';
import { CadastroService } from './services/cadastro.service';

@NgModule({
  declarations: [
    CadastroComponent,
    CadastrarComponent
  ],
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
    SharedModule,
    HttpClientModule

  ],
  providers:[
    CadastroService
  ]
})
export class CadastroModule { }
