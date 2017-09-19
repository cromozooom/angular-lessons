import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
	
	//private clientId: string = '876391dde2574dc881dd3e43795347ad';
	//private artistUrl: string = 'https://api.spotify.com/v1/search?type=artst&limit=10&client_id='+this.clientId+ '&q=';
	private searchUrl: string;
	private authToken: string;
	private appClientSecret: string;


	constructor(private _http:Http){}
	
	
	searchMusic(str:string, type='artist'){
		let headers = new Headers();

		let authToken = '876391dde2574dc881dd3e43795347ad';
		let appClientSecret = 'd12dde3430fa48e7821c42c4eb2bf4ff';
		

		var encodedClientDetails = btoa(this.authToken+ ":" + this.appClientSecret);

		headers.append('Authorization', 'Bearer '+ authToken);
		headers.append('Authorization', 'Basic '+ authToken);
		
		console.log('this is authToken: '+ authToken );
		
		// this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + 'client_id=' + this.clientId;
		
		this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&offset=0&limit=20&type='+type+'&market=US';

		return this._http.get(this.searchUrl, {headers})
			.map(res => res.json());
		}

}