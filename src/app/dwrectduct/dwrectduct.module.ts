import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { DwrectductComponent }       from './dwrectduct.component';
import { DwrectductRoutingModule }   from './dwrectduct-routing.module';

@NgModule({
    imports: [
        DwrectductRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        DwrectductComponent 
    ]
})
export class DwrectductModule { }
