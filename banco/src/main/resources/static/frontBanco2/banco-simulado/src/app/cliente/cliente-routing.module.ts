import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteComponent } from './components/cliente.component';
import { MenuComponent } from './components/menu/menu.component';
import { PerfilComponent } from './components/perfil/perfil.component';

export const ClienteRoutes: Routes = [
    {
        path: 'cliente',
        component: ClienteComponent,
        children: [
            {
                path: '',
                component: MenuComponent
            },
            {
                path: 'perfil',
                component: PerfilComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ClienteRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ClienteRoutingModule{

}
