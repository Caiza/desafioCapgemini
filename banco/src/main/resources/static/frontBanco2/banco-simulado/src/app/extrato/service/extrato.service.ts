import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env } from './../../../environments/environment';
import { HttpUtilService } from './../../shared/services/http-util-service';


@Injectable()
export class ExtratoService {

  private readonly PATH: string = ''
  constructor(
    private http: HttpClient,
    private httpUtil: HttpUtilService
  ) { }
  
  getExtrato(cpf: string): Observable<any>{
    return this.http.get(
      env.baseApiUrl + this.PATH + cpf +  this.httpUtil.header()
    );
  }

}
