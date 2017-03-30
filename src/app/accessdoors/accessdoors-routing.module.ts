import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { AccessdoorsComponent }   from './accessdoors.component';

const routes: Routes = [
    {
        path: '',
        component: AccessdoorsComponent,
        data: {
            title: 'Access Doors'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccessdoorsRoutingModule {}
