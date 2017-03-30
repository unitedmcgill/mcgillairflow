import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { UnigasketComponent }   from './unigasket.component';

const routes: Routes = [
    {
        path: '',
        component: UnigasketComponent,
        data: {
            title: 'Uni-Gasket<sup>®</sup> Self-Sealing Fittings'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UnigasketRoutingModule {}
