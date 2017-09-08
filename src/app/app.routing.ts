import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { PageHomeComponent } from './page-home/page-home.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageProjectComponent } from './page-project/page-project.component';
import { PagePhotoComponent } from './page-photo/page-photo.component';


const appRoutes: Routes = [
	{
		path: '',
		component: PageHomeComponent
	},
	{
		path: 'about',
		component: PageAboutComponent
	},
	{
		path: 'project',
		component: PageProjectComponent
	},
	{
		path: 'photo',
		component: PagePhotoComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
