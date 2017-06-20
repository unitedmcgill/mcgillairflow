import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { DimPerfComponent }   from './dimperf.component';

const routes: Routes = [
    {
        path: '',
        component: DimPerfComponent,
        data: {
            title: 'Dimensional and Performance Data'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DimPerfRoutingModule {}
