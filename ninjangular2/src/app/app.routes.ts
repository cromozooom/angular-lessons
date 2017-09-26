// Imports
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

// Declarations
import { HomeComponent } from "./home/home.component";
import { DirectoryComponent } from "./directory/directory.component";


// Route Configuration
const appRoutes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'directory',
		component: DirectoryComponent
	}

	// add here other routes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);