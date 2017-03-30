import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { VcdampersComponent }       from './vcdampers.component';
import { VcdampersRoutingModule }   from './vcdampers-routing.module';

@NgModule({
    imports: [
        VcdampersRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        VcdampersComponent 
    ]
})
export class VcdampersModule { }
