import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { SwrectductComponent }   from './swrectduct.component';

const routes: Routes = [
    {
        path: '',
        component: SwrectductComponent,
        data: {
            title: 'Single-Wall Rectangular Duct and Fittings'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SwrectductRoutingModule {}
