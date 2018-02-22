import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { OnsitemfgComponent }       from './onsitemfg.component';
import { OnsitemfgRoutingModule }   from './onsitemfg-routing.module';

@NgModule({
    imports: [
        OnsitemfgRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        OnsitemfgComponent 
    ]
})
export class OnsitemfgModule { }
