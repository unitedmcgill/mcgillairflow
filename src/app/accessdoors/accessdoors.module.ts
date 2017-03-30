import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { AccessdoorsComponent }       from './accessdoors.component';
import { AccessdoorsRoutingModule }   from './accessdoors-routing.module';

@NgModule({
    imports: [
        AccessdoorsRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        AccessdoorsComponent 
    ]
})
export class AccessdoorsModule { }
