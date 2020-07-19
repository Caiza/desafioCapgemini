import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env } from './../../../environments/environment';
import { HttpUtilService } from './../../shared/services/http-util-service';

@Injectable()
export class ClienteService {

  private readonly PATH: string = 'cliente';

  constructor(private http: HttpClient,
    private httpUtil: HttpUtilService
    ) { }

  listarCliente(): Observable<any>{
      return this.http.get(env.baseApiUrl + this.PATH);
  }

  atualizaCliente(cpf: string): Observable<any>{
    return this.http.post(env.baseApiUrl + this.PATH, cpf, this.httpUtil.header());
  }

  getCliente(cpf: string): Observable<any>{
    return this.http.get(env.baseApiUrl + this.PATH +  cpf, this.httpUtil.header());
  }
}
