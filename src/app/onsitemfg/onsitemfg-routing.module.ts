import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { OnsitemfgComponent }   from './onsitemfg.component';

const routes: Routes = [
    {
        path: '',
        component: OnsitemfgComponent,
        data: {
            title: 'On-Site Duct Manufacturing'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OnsitemfgRoutingModule {}
