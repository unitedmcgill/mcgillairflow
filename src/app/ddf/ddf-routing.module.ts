import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { DdfComponent }   from './ddf.component';

const routes: Routes = [
    {
        path: '',
        component: DdfComponent,
        data: {
            title: 'Duct-D-Fuser™ Terminal Outlets'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DdfRoutingModule {}
