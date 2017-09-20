import {Injectable} from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import {Business} from '../Business';
import {Category} from '../Category';

@Injectable()
export class FirebaseService{
	businesses: FirebaseListObservable<Business[]>;
	categories: FirebaseListObservable<Category[]>;
	
	constructor(private _af: AngularFireDatabase){
		
	}

	getBusinesses(category:string = null){
		
		// Filtered businesses
		if(category != null && category != "all"){
			this.businesses = this._af.list('/businesses', {
				query: {
					orderByChild: 'category',
					equalTo: category
				}
			}) as
			FirebaseListObservable<Business[]>
		} else {

			// Unfiltered businesses 
			this.businesses = this._af.list('/businesses') as
				FirebaseListObservable<Business[]>
		}
		return this.businesses

	}

	getCategories(){
		this.categories = this._af.list('/categories') as
			FirebaseListObservable<Category[]>
			return this.categories
	}

	addBusiness(newBusiness){
		return this.businesses.push(newBusiness)
	}

	updateBusiness(key, updBusiness){
		console.log("test 1");
		return this.businesses.update(key, updBusiness)
	}


}
