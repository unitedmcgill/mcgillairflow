import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { DwrectductComponent }   from './dwrectduct.component';

const routes: Routes = [
    {
        path: '',
        component: DwrectductComponent,
        data: {
            title: 'Rectangular-k27® Duct and Fittings'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DwrectductRoutingModule {}
