import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { DdfComponent }       from './ddf.component';
import { DdfRoutingModule }   from './ddf-routing.module';

@NgModule({
    imports: [
        DdfRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        DdfComponent 
    ]
})
export class DdfModule { }
