import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { DwroductComponent }       from './dwroduct.component';
import { DwroductRoutingModule }   from './dwroduct-routing.module';

@NgModule({
    imports: [
        DwroductRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        DwroductComponent 
    ]
})
export class DwroductModule { }
