import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
	private menuitem1: string;
	private menuitem2: string;
	private menuitem3: string;
	private menuitem4: string;
	
	private menuitemLink1: string;
	private menuitemLink2: string;
	private menuitemLink3: string;
	private menuitemLink4: string;


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
