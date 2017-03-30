import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { UnicoatComponent }   from './unicoat.component';

const routes: Routes = [
    {
        path: '',
        component: UnicoatComponent,
        data: {
            title: 'Uni-Coat™ — Polyvinyl-Chloride-Coated Steel Ductwork'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UnicoatRoutingModule {}
