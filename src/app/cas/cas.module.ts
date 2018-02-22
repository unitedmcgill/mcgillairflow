import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { CasComponent }       from './cas.component';
import { CasRoutingModule }   from './cas-routing.module';

@NgModule({
    imports: [
        CasRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        CasComponent 
    ]
})
export class CasModule { }
