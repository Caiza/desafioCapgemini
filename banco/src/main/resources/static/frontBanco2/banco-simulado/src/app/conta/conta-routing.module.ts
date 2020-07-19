import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContaTemplateComponent } from './components/conta-template.component';
import { ContaComponent } from './components/conta/conta.component';
import { TransacaoComponent } from './components/transacao/transacao.component';


export const ContaRoutes: Routes = [
    {
        path: 'conta',
        component: ContaTemplateComponent,
        children:[
        {
            path: '',
            component: ContaComponent
        },
        {
            path: 'transacao',
            component: TransacaoComponent
        }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ContaRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ContaRoutingModule{
    
}