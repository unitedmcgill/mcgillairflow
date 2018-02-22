import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { SwrectductComponent }       from './swrectduct.component';
import { SwrectductRoutingModule }   from './swrectduct-routing.module';

@NgModule({
    imports: [
        SwrectductRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        SwrectductComponent 
    ]
})
export class SwrectductModule { }
