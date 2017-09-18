import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
	menuitem1: string;
	menuitem2: string;
	menuitem3: string;
	menuitem4: string;
	
	menuitemLink1: string;
	menuitemLink2: string;
	menuitemLink3: string;
	menuitemLink4: string;


	constructor() {
		this.menuitem1= "home";
		this.menuitem2= "about";
		this.menuitem3= "project";
		this.menuitem4= "photo";
		
		this.menuitemLink1= "/";
		this.menuitemLink2= "/about";
		this.menuitemLink3= "/project";
		this.menuitemLink4= "/photo";
		
	}

	ngOnInit() {
	}

}
