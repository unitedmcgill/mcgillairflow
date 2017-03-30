import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { UniductComponent }   from './uniduct.component';

const routes: Routes = [
    {
        path: '',
        component: UniductComponent,
        data: {
            title: 'Duct System Design'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UniductRoutingModule {}
