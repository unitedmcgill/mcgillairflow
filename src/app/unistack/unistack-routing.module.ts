import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { UnistackComponent }   from './unistack.component';

const routes: Routes = [
    {
        path: '',
        component: UnistackComponent,
        data: {
            title: 'Uni-Stack™ Chimney, Breaching and Grease Duct'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UnistackRoutingModule {}
