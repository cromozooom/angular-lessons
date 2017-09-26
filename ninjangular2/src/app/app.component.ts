import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],

})
export class AppComponent {
	title = 'NINJA app works!';
	ninja = {
		name: "Nicu polonicu",
		belt: "red",
		available: true
	};

	yell(e){
		console.log("I am yeling");
		console.log(e);
	};
}
