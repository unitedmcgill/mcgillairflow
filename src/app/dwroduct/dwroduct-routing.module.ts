import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { DwroductComponent }   from './dwroduct.component';

const routes: Routes = [
    {
        path: '',
        component: DwroductComponent,
        data: {
            title: 'Double-Wall Round/Flat Oval Duct and Fittings'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DwroductRoutingModule {}
