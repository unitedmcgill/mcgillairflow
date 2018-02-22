import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { UnihousingComponent }       from './unihousing.component';
import { UnihousingRoutingModule }   from './unihousing-routing.module';

@NgModule({
    imports: [
        UnihousingRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        UnihousingComponent 
    ]
})
export class UnihousingModule { }
