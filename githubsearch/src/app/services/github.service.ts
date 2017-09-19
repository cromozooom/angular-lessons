import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
	private username: string;
	private client_id = 'e02cf0bdfbf21de51daa';
	private client_secret = '95f305f43e30a77a9d1ac01092416b8797d2f290';

	constructor(private _http: Http) {
		
		console.log("github service ready");
		this.username = "cromozooom";
	
	}

	getUser(){
		return this._http.get('http://api.github/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret )
			.map(res=> res.json);
	}
}
