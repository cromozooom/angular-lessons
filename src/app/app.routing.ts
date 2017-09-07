import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

//import { PageHomeComponent } from './components/page-home/page-home.component';
//import { PageAboutComponent } from './components/page-about/page-about.component';

import { PageAboutComponent } from './page-about/page-about.component';
import { PageHomeComponent } from './page-home/page-home.component';

const appRoutes: Routes = [
	{
		path: '',
		component: PageHomeComponent
	},
	{
		path: 'about',
		component: PageAboutComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
