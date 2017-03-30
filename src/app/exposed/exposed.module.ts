import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { ExposedComponent }       from './exposed.component';
import { ExposedRoutingModule }   from './exposed-routing.module';

@NgModule({
    imports: [
        ExposedRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        ExposedComponent 
    ]
})
export class ExposedModule { }
