import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { SolutionComponent }   from './solution.component';

const routes: Routes = [
    {
        path: '',
        component: SolutionComponent,
        data: {
            title: 'Solution Series'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SolutionRoutingModule {}
