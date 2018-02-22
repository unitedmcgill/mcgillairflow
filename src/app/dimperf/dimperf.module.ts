import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { DimPerfComponent }       from './dimperf.component';
import { DimPerfRoutingModule }   from './dimperf-routing.module';

@NgModule({
    imports: [
        DimPerfRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        DimPerfComponent 
    ]
})
export class DimPerfModule { }
