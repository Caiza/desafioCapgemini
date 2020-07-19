import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

Injectable()
export class HttpUtilService {

    constructor() { }

    header() {
        let httpHeaders: HttpHeaders = new HttpHeaders();
        if (localStorage['token']) {
            httpHeaders = httpHeaders.set(
                'Authorization', 'Bearer' + localStorage['token']
            );
        }
        return { headers: httpHeaders };
    }

    obterIdUsuario(): string{
        if(!localStorage['token']){
            return '';
        }
        const dadosUsuario = this.obterDadosUsuario();
        return dadosUsuario ? dadosUsuario.id : '';
    }

    obterDadosUsuario(){
        if(!localStorage['token']){
            return '';
        }
        return JSON.parse(atob(localStorage['token'].split('.')[1]));
    }

    obterPerfil(){
        if(!localStorage['token']){
            return '';
        }
        const dadosUsuario = this.obterDadosUsuario();
        return dadosUsuario ? dadosUsuario.role : '' ;
    }
}