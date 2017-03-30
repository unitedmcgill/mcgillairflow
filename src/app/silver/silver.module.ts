import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { SilverComponent }       from './silver.component';
import { SilverRoutingModule }   from './silver-routing.module';

@NgModule({
    imports: [
        SilverRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        SilverComponent 
    ]
})
export class SilverModule { }
