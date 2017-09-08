import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageAboutComponent } from './page-about.component';
import { AboutTestComponent } from './page-about-test.component';
import { AboutDetailsComponent } from './page-about-details.component';



const aboutTestRoutes: Routes = [
    {
        path: 'about',
        component: PageAboutComponent,
        children: [
            {
                path: 'aboutTest',
                component: AboutTestComponent,
            },
            {
                path: 'aboutDetails',
                component: AboutDetailsComponent,
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(aboutTestRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AboutTestRoutingModule { }