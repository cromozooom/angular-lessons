import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';


@Injectable()
export class SearchService {
	private clientId: string = '876391dde2574dc881dd3e43795347ad';
	private artistUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id=' + this.clientId+ '&q=';


	constructor(private http: Http) { }
	
	searchArtist(searchTerm: string) {
		let url = this.artistUrl + searchTerm;
		return this.http
			.get(url)
			.map(res => res.json());
			
	}
}
