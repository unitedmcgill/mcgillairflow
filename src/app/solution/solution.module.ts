import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { SolutionComponent }       from './solution.component';
import { SolutionRoutingModule }   from './solution-routing.module';

@NgModule({
    imports: [
        SolutionRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        SolutionComponent 
    ]
})
export class SolutionModule { }
