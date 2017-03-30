import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { LeakdetectComponent }   from './leakdetect.component';

const routes: Routes = [
    {
        path: '',
        component: LeakdetectComponent,
        data: {
            title: 'Leak Detective® Test Equipment'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LeakdetectRoutingModule {}
