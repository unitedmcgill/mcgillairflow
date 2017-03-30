import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { UnicoatComponent }       from './unicoat.component';
import { UnicoatRoutingModule }   from './unicoat-routing.module';

@NgModule({
    imports: [
        UnicoatRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        UnicoatComponent 
    ]
})
export class UnicoatModule { }
