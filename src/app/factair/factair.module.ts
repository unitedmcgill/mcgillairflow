import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { FactairComponent }       from './factair.component';
import { FactairRoutingModule }   from './factair-routing.module';

@NgModule({
    imports: [
        FactairRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        FactairComponent 
    ]
})
export class FactairModule { }
