import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { SoundpakComponent }   from './soundpak.component';

const routes: Routes = [
    {
        path: '',
        component: SoundpakComponent,
        data: {
            title: 'Sounpak® HVAC Silencers'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SoundpakRoutingModule {}
