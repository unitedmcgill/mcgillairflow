import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { LeakdetectComponent }       from './leakdetect.component';
import { LeakdetectRoutingModule }   from './leakdetect-routing.module';

@NgModule({
    imports: [
        LeakdetectRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        LeakdetectComponent 
    ]
})
export class LeakdetectModule { }
