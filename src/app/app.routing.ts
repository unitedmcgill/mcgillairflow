import { NgModule }                 from '@angular/core';
import { Routes,
         RouterModule }             from '@angular/router';

//Layouts
import { FullLayoutComponent }      from './layouts/full-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'swroduct',
                loadChildren: './swroduct/swroduct.module#SwroductModule'
            },
            {
                path: 'dwroduct',
                loadChildren: './dwroduct/dwroduct.module#DwroductModule'
            },
            {
                path: 'swrectduct',
                loadChildren: './swrectduct/swrectduct.module#SwrectductModule'
            },
            {
                path: 'dwrectduct',
                loadChildren: './dwrectduct/dwrectduct.module#DwrectductModule'
            },
            {
                path: 'exposed',
                loadChildren: './exposed/exposed.module#ExposedModule'
            },
            {
                path: 'silver',
                loadChildren: './silver/silver.module#SilverModule'
            },
            {
                path: 'unigasket',
                loadChildren: './unigasket/unigasket.module#UnigasketModule'
            },
            {
                path: 'unicoat',
                loadChildren: './unicoat/unicoat.module#UnicoatModule'
            },
            {
                path: 'unistack',
                loadChildren: './unistack/unistack.module#UnistackModule'
            },
            {
                path: 'uniquick',
                loadChildren: './uniquick/uniquick.module#UniquickModule'
            },
            {
                path: 'ddf',
                loadChildren: './ddf/ddf.module#DdfModule'
            },
            {
                path: 'factair',
                loadChildren: './factair/factair.module#FactairModule'
            },
            {
                path: 'vcdampers',
                loadChildren: './vcdampers/vcdampers.module#VcdampersModule'
            },
            {
                path: 'accessdoors',
                loadChildren: './accessdoors/accessdoors.module#AccessdoorsModule'
            },
            {
                path: 'leakdetect',
                loadChildren: './leakdetect/leakdetect.module#LeakdetectModule'
            },
            {
                path: 'unihousing',
                loadChildren: './unihousing/unihousing.module#UnihousingModule'
            },
            {
                path: 'soundpak',
                loadChildren: './soundpak/soundpak.module#SoundpakModule'
            },
            {
                path: 'uniduct',
                loadChildren: './uniduct/uniduct.module#UniductModule'
            },
            {
                path: 'onsitemfg',
                loadChildren: './onsitemfg/onsitemfg.module#OnsitemfgModule'
            },
            {
                path: 'tools',
                loadChildren: './tools/tools.module#ToolsModule'
            },
            {
                path: 'career',
                loadChildren: './career/career.module#CareerModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#CustomersModule'
            },
            {
                path: 'files',
                loadChildren: './files/files.module#FilesModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#LocationModule'
            },
            {
                path: 'contactus',
                loadChildren: './contactus/contactus.module#ContactUsModule'
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
