import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { UniquickComponent }       from './uniquick.component';
import { UniquickRoutingModule }   from './uniquick-routing.module';

@NgModule({
    imports: [
        UniquickRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        UniquickComponent 
    ]
})
export class UniquickModule { }
