import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { SwroductComponent }       from './swroduct.component';
import { SwroductRoutingModule }   from './swroduct-routing.module';

@NgModule({
    imports: [
        SwroductRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        SwroductComponent 
    ]
})
export class SwroductModule { }
