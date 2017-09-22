import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { FirebaseService } from './services/firebase.service';
import {Business} from './Business';
import {Category} from './Category';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [FirebaseService]
})
export class AppComponent implements OnInit{
	businesses:Business[];
	categories:Category[];
	appState:string;
	activeKey:string;

	// give possibility to edit Businesses
	activeCompany: string;
	activeDescription: string;
	activeCategory: string;
	activeYearsInBusiness: string;
	activeStreetAddress: string;
	activeCity: string;
	activeZipcode: string;
	activeBState: string;
	activeEmail: string;
	activePhone: string;

	constructor(private _firebaseService:FirebaseService){}

	ngOnInit(){
		this._firebaseService.getBusinesses().subscribe(businesses => {
			this.businesses = businesses;
		});

		this._firebaseService.getCategories().subscribe(categories => {
			this.categories = categories;
		});
	}
	
	changeState(state, key){
		if(key){
			this.activeKey = key;
		}
		this.appState = state
		console.log(state)
	}
	filterCategory(category){
		console.log(category)
		this._firebaseService.getBusinesses(category).subscribe(businesses => {
			this.businesses = businesses;
		});
	}

	addBusiness(
		company: string,
		description: string,
		category: string,
		years_in_business: string,
		street_address: string,
		city: string,
		zipcode: string,
		bstate: string,
		email: string,
		phone: string
	){
		var create_at = new Date().toString();

		var newBusiness = {
			company: company,
			description: description,
			category: category,
			years_in_business: years_in_business,
			street_address: street_address,
			city: city,
			zipcode: zipcode,
			bstate: bstate,
			email: email,
			phone: phone,
			create_at: create_at
		}

		console.log(newBusiness);

		this._firebaseService.addBusiness(newBusiness);

		this.changeState('default', '0');
	}

	showEdit(business){
		//console.log("show edit");
		
		this.changeState('edit', business.k$ey);

		this.activeCompany 			= business.company;
		this.activeDescription 		= business.description;
		this.activeCategory 		= business.category;
		this.activeYearsInBusiness 	= business.years_in_business;
		this.activeStreetAddress 	= business.street_address;
		this.activeCity 			= business.city;
		this.activeZipcode 			= business.zipcode;
		this.activeBState 			= business.bstate;
		this.activeEmail 			= business.email;
		this.activePhone 			= business.phone;

		//this.changeState('default', '0');
	}

	updateBusiness(){
		console.log("update - app-components");
		var updBusiness = {
			company: 			this.activeCompany,
			description: 		this.activeDescription,
			category: 			this.activeCategory,
			years_in_business: 	this.activeYearsInBusiness,
			street_address: 	this.activeStreetAddress,
			city: 				this.activeCity,
			zipcode: 			this.activeZipcode,
			state: 				this.activeBState,
			email: 				this.activeEmail,
			phone: 				this.activePhone
		}

		this._firebaseService.updateBusiness(this.activeKey, updBusiness);

		this.changeState('default', '0');
	}


}