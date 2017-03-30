import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { ExposedComponent }   from './exposed.component';

const routes: Routes = [
    {
        path: '',
        component: ExposedComponent,
        data: {
            title: 'Exposed Duct'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExposedRoutingModule {}
