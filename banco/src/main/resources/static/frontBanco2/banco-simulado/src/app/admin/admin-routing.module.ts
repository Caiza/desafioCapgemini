import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarComponent } from './../autenticacao/cadastro/components/cadastrar/cadastrar.component';
import { AdminComponent } from './components/AdminComponent';
import { AtualizacaoComponent } from './components/atualizacao/atualizacao.component';
import { ListagemComponent } from './components/listagem/listagem.component';


export const AdminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: '',
                component: ListagemComponent
            },
            {
                path: 'cadastro',
                component: CadastrarComponent
            },
            {
                path: 'atualizacao/:lancamentoId',
                component: AtualizacaoComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(AdminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule{
}