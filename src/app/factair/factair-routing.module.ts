import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { FactairComponent }   from './factair.component';

const routes: Routes = [
    {
        path: '',
        component: FactairComponent,
        data: {
            title: 'Factair™ Terminal Outlets'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FactairRoutingModule {}
