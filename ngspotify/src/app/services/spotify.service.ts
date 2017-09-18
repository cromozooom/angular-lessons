import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{
	private searchUrl: string;
	private clientId: string ='BQDBeL_LvV9sgAthEzqsGZP44OscnN_cryOFHnXkF0He2iBq66a39r0XjiYnPDFTzm0dcrPYH2W5JHTH0g67DMP5TAMhYccKIzGzDpGA8kGm_gJOvLab5Dtxx5K6Z5CKjfEqd1vBsZNR8y-dIU4nqMkPefanrD91iVLlB-KRbH8_Sd8Y0ZgkgU1QFLre_BzaUmp-CnMYipeeGPIaOaNJOyu8Cw_bjnVwe8xh-CXOrR8Nlss3PX2rgws8N2AG9Tcvc0NntoWHIXqYV4YlfbI2UnH8J4bKd-DfmT46Xy6CSEL0yhJ4xPCnobdOsLB7';

	
	constructor(private _http:Http){
		
	}
	
	searchMusic(str:string, type='artist'){
		this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type;
		return this._http.get(this.searchUrl)
			.map(res => res.json());
	}
}