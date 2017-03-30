import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { SilverComponent }   from './silver.component';

const routes: Routes = [
    {
        path: '',
        component: SilverComponent,
        data: {
            title: 'SilverGuard™ Antimicrobial Ductwork'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SilverRoutingModule {}
