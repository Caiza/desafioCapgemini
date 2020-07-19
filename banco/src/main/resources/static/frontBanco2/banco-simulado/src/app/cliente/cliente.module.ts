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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { ClienteComponent } from './components/cliente.component';
import { MenuComponent } from './components/menu/menu.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClienteService } from './services/cliente.service';


@NgModule({
  declarations: [PerfilComponent, ClienteComponent, MenuComponent],
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
    MatToolbarModule,
    SharedModule
  ],
  providers:[
    ClienteService
  ]
})
export class ClienteModule { }
