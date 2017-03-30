import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { UniquickComponent }   from './uniquick.component';

const routes: Routes = [
    {
        path: '',
        component: UniquickComponent,
        data: {
            title: 'Uni-Quick™ Movable Duct System'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UniquickRoutingModule {}
