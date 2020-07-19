import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env } from '../../../../environments/environment';
import { Cliente } from './../../../cliente/models/cliente';



@Injectable()
export class CadastroService {

 
  private readonly PATH: string = 'cadastrar';
  constructor(private http: HttpClient){}

  cadastrar(cadastroCliente: Cliente): Observable<any>{
      return this.http.post(env.baseApiUrl + this.PATH, cadastroCliente);
  }
}

