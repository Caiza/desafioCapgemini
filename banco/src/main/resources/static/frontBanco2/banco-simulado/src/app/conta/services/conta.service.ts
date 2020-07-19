import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private readonly PATH: String = 'conta/';

  constructor(
    private http: HttpClient,
    private httpHeaders: HttpHeaders
  ) { }

  getConta(cpf: string): Observable<any>{
    return this.http.get(env.baseApiUrl + this.PATH +  cpf +  this.httpHeaders);    
  }

}
