import { Extrato } from './../../extrato/models/extrato';

export class Conta {

    constructor(
        public agencia: string,
        public numeroConta: string,
        public saldo: string,
        public dataCriacao: Date,
        public dataAlteracao: Date,
        public extrato: Extrato
    ){}
}