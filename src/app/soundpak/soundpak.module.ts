import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { SoundpakComponent }       from './soundpak.component';
import { SoundpakRoutingModule }   from './soundpak-routing.module';

@NgModule({
    imports: [
        SoundpakRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        SoundpakComponent 
    ]
})
export class SoundpakModule { }
