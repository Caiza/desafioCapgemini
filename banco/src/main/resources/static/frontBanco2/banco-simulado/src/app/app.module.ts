import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroRoutingModule } from './autenticacao/cadastro/cadastro-routing.module';
import { CadastroModule } from './autenticacao/cadastro/cadastro.module';
import { LoginRoutingModule } from './autenticacao/login/login-routing.module';
import { LoginModule } from './autenticacao/login/login.module';
import { ClienteRoutingModule } from './cliente/cliente-routing.module';
import { ClienteModule } from './cliente/cliente.module';
import { ContaRoutingModule } from './conta/conta-routing.module';
import { ContaModule } from './conta/conta.module';
import { ExtratoComponent } from './extrato/components/extrato/extrato.component';
import { ExtratoRoutingModule } from './extrato/extrato-routing.module';
import { ExtratoModule } from './extrato/extrato.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    LoginModule,
    LoginRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatIconModule,
    MatToolbarModule, 
    MatInputModule,
    CadastroModule,
    CadastroRoutingModule,
    ExtratoModule,
    ExtratoRoutingModule,
    ContaModule,
    ClienteModule,
    ContaRoutingModule,
    ClienteRoutingModule,
    AdminModule,
    AdminRoutingModule,    

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
