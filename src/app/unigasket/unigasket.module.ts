import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';

import { UnigasketComponent }       from './unigasket.component';
import { UnigasketRoutingModule }   from './unigasket-routing.module';

@NgModule({
    imports: [
        UnigasketRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        UnigasketComponent 
    ]
})
export class UnigasketModule { }
