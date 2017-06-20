import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { CasComponent }   from './cas.component';

const routes: Routes = [
    {
        path: '',
        component: CasComponent,
        data: {
            title: 'Current Awareness Service'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CasRoutingModule {}
