import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { UnistackComponent }       from './unistack.component';
import { UnistackRoutingModule }   from './unistack-routing.module';

@NgModule({
    imports: [
        UnistackRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        UnistackComponent 
    ]
})
export class UnistackModule { }
