import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { UniductComponent }       from './uniduct.component';
import { UniductRoutingModule }   from './uniduct-routing.module';

@NgModule({
    imports: [
        UniductRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        UniductComponent 
    ]
})
export class UniductModule { }
