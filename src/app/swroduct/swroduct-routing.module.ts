import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { SwroductComponent }   from './swroduct.component';

const routes: Routes = [
    {
        path: '',
        component: SwroductComponent,
        data: {
            title: 'Single-Wall Round/Flat Oval Duct and Fittings'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SwroductRoutingModule {}
