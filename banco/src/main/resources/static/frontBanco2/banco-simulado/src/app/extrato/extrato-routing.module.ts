import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtratoTemplate } from './components/extrato-template';
import { ExtratoComponent } from './components/extrato/extrato.component';

export const ExtratoRoutes: Routes= [

    {
        path: 'extrato',
        component: ExtratoTemplate,
        children: [
            {
                path: '', 
                component: ExtratoComponent
            }
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(ExtratoRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ExtratoRoutingModule{

}