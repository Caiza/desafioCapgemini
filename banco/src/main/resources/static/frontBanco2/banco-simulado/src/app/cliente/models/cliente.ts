import { Conta } from 'src/app/conta/models/conta';

export class Cliente{

    constructor(
        public nome: string,
        public email: string,
        public cpf: string,
        public perfil: string,
        public telefone: string,
        public dataNascimento: Date,
        public dataCriacao: Date,
        public conta: Conta,
      //  public id?: string
    ){}
}