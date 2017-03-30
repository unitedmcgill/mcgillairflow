import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { VcdampersComponent }   from './vcdampers.component';

const routes: Routes = [
    {
        path: '',
        component: VcdampersComponent,
        data: {
            title: 'Volume Control Dampers'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VcdampersRoutingModule {}
