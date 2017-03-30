import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { UnihousingComponent }   from './unihousing.component';

const routes: Routes = [
    {
        path: '',
        component: UnihousingComponent,
        data: {
            title: 'Uni-Housing™ Pressurized Enclosures'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UnihousingRoutingModule {}
