import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { CadastroComponent } from './components/cadastro.component';

export const CadastroRoutes: Routes = [
    {
        path: 'cadastro',
        component: CadastrarComponent
        // component: CadastroComponent,
        // children: [ {
        //         path: '',
        //         component: CadastrarComponent
        //     }
        // ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(CadastroRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CadastroRoutingModule{
    
}